import { ReactNode } from 'react';

export type Post = {
  title: string;
  description?: string;
  date?: string;
  hide?: boolean;
  image?: string;
  path: string;
  element?: ReactNode | null;
  tags?: PostTags[];
  keywords?: string[];
  selected?: boolean;
};

export enum PostTags {
  ISRAEL = 'Israel',
  NOVU = 'Novu',
  WORKOUT = 'Workout',
  SWEDEN = 'Sweden',
}
