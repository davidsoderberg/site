import { ReactNode } from 'react';

export const When = ({children, truthy, fallback = null}: {
  children: ReactNode,
  truthy: boolean;
  fallback?: ReactNode
}) => truthy ? children: fallback;