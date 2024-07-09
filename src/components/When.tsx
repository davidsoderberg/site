import { ReactNode } from 'react';
import { DefaultProps } from '../types/defaultProps';

export const When = ({
  children,
  truthy,
  fallback = null,
}: {
  truthy: boolean;
  fallback?: ReactNode;
} & Pick<DefaultProps, 'children'>) => (truthy ? children : fallback);
