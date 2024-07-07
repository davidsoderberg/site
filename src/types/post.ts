import { ReactNode } from 'react';

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  hide?: boolean;
  image?: string;
  path: string;
  element?: ReactNode | null;
};
