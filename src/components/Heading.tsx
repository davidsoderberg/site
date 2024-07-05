import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Heading = ({
  children,
  variant = 'h2',
}: {
  children: ReactNode;
  variant?: 'h2' | 'h3';
}) => {
  if (variant === 'h3') {
    return (
      <h3
        className={css({
          color: 'white',
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: '20px',
          margin: '16px 0',
        })}
      >
        {children}
      </h3>
    );
  }

  return (
    <h2
      className={css({
        color: 'white',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '24px',
        margin: '16px 0',
      })}
    >
      {children}
    </h2>
  );
};
