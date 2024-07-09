import { cx } from '../../../styled-system/css';
import { grid } from '../../../styled-system/patterns';
import { DefaultProps } from '../../types/defaultProps';
import { Box } from '../Box';

export const GridContainer = ({ children, className }: DefaultProps) => {
  return (
    <Box className={cx(grid({ columns: 12, columnGap: 200 }), className)}>
      {children}
    </Box>
  );
};
