import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        width: '80%',
        margin: '0 auto',
      })}
    >
      {children}
    </div>
  );
};
