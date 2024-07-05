import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        backgroundColor: 'background',
        width: '100%',
        minHeight: '100vh',
        border: '4px solid',
        borderColor: 'white',
        borderRadius: '8px',
        paddingBottom: '16px',
        boxShadow: 'defaultInset',
      })}
    >
      <div
        className={css({
          width: '80%',
          margin: '0 auto',
          paddingBottom: '8px',
        })}
      >
        {children}
      </div>
    </div>
  );
};
