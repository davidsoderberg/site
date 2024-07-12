import { ReactNode } from 'react';
import { DefaultProps } from '../types/defaultProps';

export const When = ({
  children,
  truthy,
  fallback = null,
}: Omit<
  DefaultProps<{
    truthy: boolean;
    fallback?: ReactNode;
  }>,
  'className'
>) => (truthy ? children : fallback);
