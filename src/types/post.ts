import { ReactNode } from 'react';

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  hide?: boolean;
  image?: string;
  path: string;
  element?: ReactNode | null;
  tags?: PostTags[];
  selected?: boolean;
};

export enum PostTags {
  ISRAEL = 'Israel',
  NOVU = 'Novu',
  WORKOUT = 'Workout',
  SWEDEN = 'Sweden',
}
