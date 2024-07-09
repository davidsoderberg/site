import { ReactNode } from 'react';

export type DefaultProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;
