import { cx } from '../../styled-system/css';
import { vstack } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';
import { Box } from './Box';

export const Column = ({ children, className }: DefaultProps) => {
  return <Box className={cx(vstack(), className)}>{children}</Box>;
};
