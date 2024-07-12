import { useEffect, useMemo, useState } from 'react';
import { routes, CATCH_ALL } from '../routes';
import { Post } from '../types/post';

export const useRoute = (path?: string): Post => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    useMemo(
      (): Post =>
        routes.find((route) => route.path === (path || pathname)) as Post,
      [path, pathname]
    ) || CATCH_ALL
  );
};
