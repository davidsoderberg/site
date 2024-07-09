import { css, cva, cx } from '../../styled-system/css';
import { SystemStyleObject } from '../../styled-system/types';
import { DefaultProps } from '../types/defaultProps';

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
  style,
  variant = 'default',
}: DefaultProps & { variant?: Variants }) => {
  return (
    <div className={cx(cardClassName({ variant }), css(style), className)}>
      {children}
    </div>
  );
};
