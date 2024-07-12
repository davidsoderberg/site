import { cx } from '../../styled-system/css';
import { hstack } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';
import { Box } from './Box';

export const Row = ({ className, children }: DefaultProps) => {
  return <Box className={cx(hstack({
    smDown: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  }), className)}>{children}</Box>;
};
