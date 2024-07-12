import { useMemo } from 'react';
import { cva, cx } from '../../styled-system/css';
import { SystemStyleObject } from '../../styled-system/types';
import { DefaultProps } from '../types/defaultProps';

export type Variants = 'ordered' | 'unordered';

const listClassName = cva<{ variant: Record<Variants, SystemStyleObject> }>({
  base: {
    marginLeft: 100,
    marginBottom: 100,
    color: 'white',
    '& > li': {
      marginBottom: 50,
    },
  },
  variants: {
    variant: {
      ordered: {
        listStyleType: 'decimal',
      },
      unordered: {
        listStyleType: 'disc',
      },
    },
  },
});

const OrderedList = (props: DefaultProps) => <ol {...props} />;

const UnorderedList = (props: DefaultProps) => <ul {...props} />;

export const List = ({
  children,
  variant = 'unordered',
  className,
}: DefaultProps<{
  variant?: Variants;
}>) => {
  const Component = useMemo(
    () => (variant === 'ordered' ? OrderedList : UnorderedList),
    [variant]
  );

  return (
    <Component
      className={cx(
        listClassName({
          variant,
        }),
        className
      )}
    >
      {children}
    </Component>
  );
};
