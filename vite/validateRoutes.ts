import { PATHS } from '../app/routes';
import { bold, error } from './colors';

const arrayEquals = (a: string[], b: string[]) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a?.length === b?.length &&
    a.every((val, index) => val === b[index])
  );
};

export const validateRoutes = (paths: string[]): void => {
  paths = paths
    .map((path) => (path === '*' ? path : '/' + path))
    .reduce(
      (prev, current): string[] =>
        prev.includes(current) ? prev : [...prev, current],
      [] as string[]
    )
    .sort();

  const expectedPaths = Object.values(PATHS).sort();

  const isProd = process.env.NODE_ENV === 'production';

  if (arrayEquals(expectedPaths, paths)) {
    return;
  }
  if (expectedPaths?.length > paths?.length) {
    const found = expectedPaths.filter((path) => !paths.includes(path));
    const result = `There is more paths than routes, could not find routes: ${bold(
      found.join(', ')
    )}`;

    if (isProd) {
      throw new Error(result);
    }

    console.error(error(result));
    return;
  }

  const found = paths.filter((path) => !expectedPaths.includes(path));
  const result = `There is less paths than routes, could not find paths: ${bold(
    found.join(', ')
  )}`;

  if (isProd) {
    throw new Error(result);
  }

  console.error(error(result));
};
