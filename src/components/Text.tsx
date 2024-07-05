import { ReactNode } from 'react';
import { css, cx } from '../../styled-system/css';

export const Text = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cx(
        css({
          color: 'white',
          marginBottom: '16px',
        }),
        className
      )}
    >
      {children}
    </p>
  );
};
