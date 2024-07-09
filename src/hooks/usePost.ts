import { useMemo } from 'react';
import { posts } from '../routes';
import { Post } from '../types/post';

export const usePost = (path: string): Post =>
  useMemo(() => findPost(path), [path]);

export const findPost = (path: string) =>
  posts.find((route) => route.path === path) as Post;
