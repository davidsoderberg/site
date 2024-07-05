import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <blockquote
      className={css({
        marginBottom: '16px',
        borderLeft: '8px solid',
        borderColor: 'white',
        padding: '0 16px',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        '&:before': {
          color: 'white',
          content: 'open-quote',
          fontSize: '4em',
          lineHeight: '16px',
          marginRight: '0.25em',
          verticalAlign: '-0.5em',
        },
      })}
    >
      {children}
    </blockquote>
  );
};
