import { ReactNode } from 'react';
import { Styles } from '../../styled-system/css';

export type DefaultProps = {
  children: ReactNode;
  className?: string;
  style?: Styles;
};
