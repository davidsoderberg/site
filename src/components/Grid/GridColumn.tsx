import { cva, cx } from '../../../styled-system/css';
import { SystemStyleObject } from '../../../styled-system/types';
import { DefaultProps } from '../../types/defaultProps';
import { Box } from '../Box';

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const columnClassName = cva<{ colSpan: Record<ColSpan, SystemStyleObject> }>({
  base: {
    smDown: {
      gridColumn: 'span 12',
    },
  },
  variants: {
    colSpan: {
      1: {
        gridColumn: 'span 1',
      },
      2: {
        gridColumn: 'span 2',
      },
      3: {
        gridColumn: 'span 3',
      },
      4: {
        gridColumn: 'span 4',
      },
      5: {
        gridColumn: 'span 5',
      },
      6: {
        gridColumn: 'span 6',
      },
      7: {
        gridColumn: 'span 7',
      },
      8: {
        gridColumn: 'span 8',
      },
      9: {
        gridColumn: 'span 9',
      },
      10: {
        gridColumn: 'span 10',
      },
      11: {
        gridColumn: 'span 11',
      },
      12: {
        gridColumn: 'span 12',
      },
    },
  },
});

export const GridColumn = ({
  children,
  className,
  colSpan,
}: DefaultProps<{
  colSpan: ColSpan;
}>) => {
  return (
    <Box className={cx(columnClassName({ colSpan }), className)}>
      {children}
    </Box>
  );
};
