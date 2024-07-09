import { cx } from '../../styled-system/css';
import { center } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';
import { Box } from './Box';

export const Center = ({ children, className }: DefaultProps) => {
  return <Box className={cx(center(), className)}>{children}</Box>;
};
