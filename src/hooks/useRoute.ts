import { useMemo } from 'react';
import { routes } from '../routes';
import { Post } from '../types/post';

export const useRoute = (path: string = window.location.pathname): Post =>
  useMemo(
    (): Post => routes.find((route) => route.path === path) as Post,
    [path]
  );
