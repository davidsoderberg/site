import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Quote = ({ children }: { children: ReactNode }) => {
  return (
    <blockquote
      className={css({
        marginBottom: '16px',
        borderLeft: '8px solid',
        borderRight: '8px solid',
        borderColor: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        '&:before': {
          color: 'white',
          content: 'open-quote',
          fontSize: '4em',
          lineHeight: '16px',
          marginRight: '0.25em',
          verticalAlign: '-0.5em',
        },
        '& > p:last-of-type': {
          marginBottom: 0,
        },
        '&:after': {
          color: 'white',
          content: 'close-quote',
          fontSize: '4em',
          lineHeight: '16px',
          marginTop: '-0.1em',
          textAlign: 'right',
          display: 'block',
        },
      })}
    >
      {children}
    </blockquote>
  );
};
