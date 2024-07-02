import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={css({
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
