import fs from 'fs';
import path from 'path';
import type {
  RouteManifest,
  DefineRouteFunction,
  DefineRoutesFunction,
} from '@remix-run/dev/dist/config/routes';
import { createRouteId } from '@remix-run/dev/dist/config/routes';
import { validateRoutes } from './validateRoutes';

const paramPrefixChar = '$' as const;
const escapeStart = '[' as const;
const escapeEnd = ']' as const;
const optionalStart = '(' as const;
const optionalEnd = ')' as const;
const routeSuffix = '.route' as const;

const routeModuleExts = ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'];

const isRouteModuleFile = (filename: string): boolean =>
  routeModuleExts.find((ext) => filename.endsWith(routeSuffix + ext)) !==
  undefined;

type CreateRoutesFromFoldersOptions = {
  appDirectory?: string;
  routesDirectory?: string;
};

export const createRoutesFromFolders = (
  defineRoutes: DefineRoutesFunction,
  options: CreateRoutesFromFoldersOptions = {}
): RouteManifest => {
  const { appDirectory = 'app', routesDirectory = 'routes' } = options;

  const appRoutesDirectory = path.join(appDirectory, routesDirectory);
  const files: { [routeId: string]: string } = {};

  visitFiles(appRoutesDirectory, (file) => {
    if (!isRouteModuleFile(file)) {
      return;
    }
    const relativePath = path.join(routesDirectory, file);
    const routeId = createRouteId(relativePath.replace(routeSuffix, ''));
    files[routeId] = relativePath;
  });

  const routeIds = Object.keys(files).sort(byLongestFirst);
  const parentRouteIds = getParentRouteIds(routeIds);
  const uniqueRoutes = new Map<string, string>();

  function defineNestedRoutes(
    defineRoute: DefineRouteFunction,
    parentId?: string
  ): void {
    const childRouteIds = routeIds.filter((id) => {
      return parentRouteIds[id] === parentId;
    });

    for (const routeId of childRouteIds) {
      const routePath: string | undefined = createRoutePath(
        routeId.slice((parentId || routesDirectory).length + 1)
      );

      const isIndexRoute = routeId.endsWith('/index');
      const fullPath = createRoutePath(
        routeId.slice(routesDirectory.length + 1)
      );
      const uniqueRouteId = (fullPath || '') + (isIndexRoute ? '?index' : '');
      const isPathlessLayoutRoute =
        routeId.split('/').pop()?.startsWith('__') === true;

      if (uniqueRouteId && !isPathlessLayoutRoute) {
        if (uniqueRoutes.has(uniqueRouteId)) {
          throw new Error(
            `Path ${JSON.stringify(fullPath || '/')} defined by route ` +
              `${JSON.stringify(routeId)} conflicts with route ` +
              `${JSON.stringify(uniqueRoutes.get(uniqueRouteId))}`
          );
        } else {
          uniqueRoutes.set(uniqueRouteId, routeId);
        }
      }

      if (isIndexRoute) {
        const invalidChildRoutes = routeIds.filter(
          (id) => parentRouteIds[id] === routeId
        );

        if (invalidChildRoutes.length > 0) {
          throw new Error(
            `Child routes are not allowed in index routes. Please remove child routes of ${routeId}`
          );
        }

        defineRoute(routePath, files[routeId], { index: true, id: routeId });
      } else {
        defineRoute(routePath, files[routeId], { id: routeId }, () => {
          defineNestedRoutes(defineRoute, routeId);
        });
      }
    }
  }

  const defineRoute = defineRoutes(defineNestedRoutes);

  validateRoutes(
    Array.from(uniqueRoutes.keys()).map((path) => path.replace('?index', ''))
  );

  return defineRoute;
};

const isNewEscapeSequence = (
  inEscapeSequence: number,
  char: string,
  prevChar: string | undefined
) => {
  return !inEscapeSequence && char === escapeStart && prevChar !== escapeStart;
};

const isCloseEscapeSequence = (
  inEscapeSequence: number,
  char: string,
  nextChar: string | undefined
) => {
  return inEscapeSequence && char === escapeEnd && nextChar !== escapeEnd;
};

const isStartOfLayoutSegment = (
  char: string,
  nextChar: string | undefined,
  rawSegmentBuffer: string
) => {
  return char === '_' && nextChar === '_' && !rawSegmentBuffer;
};

const isNewOptionalSegment = (
  inEscapeSequence: number,
  char: string,
  inOptionalSegment: number,
  prevChar: string | undefined
) => {
  return (
    char === optionalStart &&
    prevChar !== optionalStart &&
    (isSegmentSeparator(prevChar) || prevChar === undefined) &&
    !inOptionalSegment &&
    !inEscapeSequence
  );
};

const isCloseOptionalSegment = (
  inEscapeSequence: number,
  char: string,
  inOptionalSegment: number,
  nextChar: string | undefined
) => {
  return (
    char === optionalEnd &&
    nextChar !== optionalEnd &&
    (isSegmentSeparator(nextChar) || nextChar === undefined) &&
    inOptionalSegment &&
    !inEscapeSequence
  );
};

const isSegmentSeparator = (checkChar: string | undefined) => {
  if (!checkChar) {
    return false;
  }
  return ['/', '.', path.win32.sep].includes(checkChar);
};

const getParentRouteIds = (
  routeIds: string[]
): Record<string, string | undefined> => {
  return routeIds.reduce<Record<string, string | undefined>>(
    (parentRouteIds, childRouteId) => ({
      ...parentRouteIds,
      [childRouteId]: routeIds.find((id) => childRouteId.startsWith(`${id}/`)),
    }),
    {}
  );
};

const byLongestFirst = (a: string, b: string): number => {
  return b.length - a.length;
};

const visitFiles = (
  dir: string,
  visitor: (file: string) => void,
  baseDir = dir
): void => {
  for (const filename of fs.readdirSync(dir)) {
    const file = path.resolve(dir, filename);
    const stat = fs.lstatSync(file);

    if (stat.isDirectory()) {
      visitFiles(file, visitor, baseDir);
    } else if (stat.isFile()) {
      visitor(path.relative(baseDir, file));
    }
  }
};

const createRoutePath = (partialRouteId: string): string | undefined => {
  let result = '';
  let rawSegmentBuffer = '';

  let inEscapeSequence = 0;
  let inOptionalSegment = 0;
  let optionalSegmentIndex = null;
  let skipSegment = false;
  for (let i = 0; i < partialRouteId.length; i++) {
    const char = partialRouteId.charAt(i);
    const prevChar = i > 0 ? partialRouteId.charAt(i - 1) : undefined;
    const nextChar =
      i < partialRouteId.length - 1 ? partialRouteId.charAt(i + 1) : undefined;

    if (skipSegment) {
      if (isSegmentSeparator(char)) {
        skipSegment = false;
      }
      continue;
    }

    if (isNewEscapeSequence(inEscapeSequence, char, prevChar)) {
      inEscapeSequence++;
      continue;
    }

    if (isCloseEscapeSequence(inEscapeSequence, char, nextChar)) {
      inEscapeSequence--;
      continue;
    }

    if (
      isNewOptionalSegment(inEscapeSequence, char, inOptionalSegment, prevChar)
    ) {
      inOptionalSegment++;
      optionalSegmentIndex = result.length;
      result += optionalStart;
      continue;
    }

    if (
      isCloseOptionalSegment(
        inEscapeSequence,
        char,
        inOptionalSegment,
        nextChar
      )
    ) {
      if (optionalSegmentIndex !== null) {
        result =
          result.slice(0, optionalSegmentIndex) +
          result.slice(optionalSegmentIndex + 1);
      }
      optionalSegmentIndex = null;
      inOptionalSegment--;
      result += '?';
      continue;
    }

    if (inEscapeSequence) {
      result += char;
      continue;
    }

    if (isSegmentSeparator(char)) {
      if (rawSegmentBuffer === 'index' && result.endsWith('index')) {
        result = result.replace(/\/?index$/, '');
      } else {
        result += '/';
      }

      rawSegmentBuffer = '';
      inOptionalSegment = 0;
      optionalSegmentIndex = null;
      continue;
    }

    if (isStartOfLayoutSegment(char, nextChar, rawSegmentBuffer)) {
      skipSegment = true;
      continue;
    }

    rawSegmentBuffer += char;

    if (char === paramPrefixChar) {
      if (nextChar === optionalEnd) {
        throw new Error(
          `Invalid route path: ${partialRouteId}. Splat route $ is already optional`
        );
      }
      result += typeof nextChar === 'undefined' ? '*' : ':';
      continue;
    }

    result += char;
  }

  if (rawSegmentBuffer === 'index' && result.endsWith('index')) {
    result = result.replace(/\/?index$/, '');
  } else {
    result = result.replace(/\/$/, '');
  }

  if (rawSegmentBuffer === 'index' && result.endsWith('index?')) {
    throw new Error(
      `Invalid route path: ${partialRouteId}. Make index route optional by using (index)`
    );
  }

  return result || undefined;
};
