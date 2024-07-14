import { PATHS } from '../app/routes';
import { bold, error } from './colors';

export type RouteManifest = Record<string, { path?: string }>;

const arrayEquals = (a: string[], b: string[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a?.length === b?.length &&
    a.every((val, index) => val === b[index])
  );
};

export const validateRoutes = (routes: RouteManifest) => {
  const paths = Object.values(routes)
    .map((route) => route.path)
    .map((path) => {
      if (path === undefined) {
        path = '';
      }

      return path === '*' ? path : '/' + path;
    })
    .reduce(
      (prev, current): string[] =>
        prev.includes(current) ? prev : [...prev, current],
      [] as string[]
    )
    .sort();

  const expectedPaths = Object.values(PATHS).sort();

  const isProd = process.env.NODE_ENV === 'production';

  if (!arrayEquals(expectedPaths, paths)) {
    if (expectedPaths?.length > paths?.length) {
      const found = expectedPaths.filter((path) => !paths.includes(path));
      const result = `There is more paths than routes, could not find routes: ${bold(
        found.join(', ')
      )}`;

      return isProd ? Promise.reject(result) : console.error(error(result));
    }

    const found = paths.filter((path) => !expectedPaths.includes(path));
    const result = `There is less paths than routes, could not find paths: ${bold(
      found.join(', ')
    )}`;

    return isProd ? Promise.reject(result) : console.error(error(result));
  }

  return Promise.resolve();
};
