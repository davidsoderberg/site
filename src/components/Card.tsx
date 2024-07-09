import { cva, cx } from '../../styled-system/css';
import { SystemStyleObject } from '../../styled-system/types';
import { DefaultProps } from '../types/defaultProps';
import { Box } from './Box';

export type Variants = 'default' | 'transparent';

const cardClassName = cva<{ variant: Record<Variants, SystemStyleObject> }>({
  base: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: 'card',
        borderRadius: 'default',
        boxShadow: 'default',
      },
      transparent: {},
    },
  },
});

export const Card = ({
  children,
  className,

  variant = 'default',
}: DefaultProps & { variant?: Variants }) => {
  return (
    <Box className={cx(cardClassName({ variant }), className)}>{children}</Box>
  );
};
