import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Quote = ({ children, className, style }: DefaultProps) => {
  return (
    <blockquote
      className={cx(
        css(
          {
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
          },
          style
        ),
        className
      )}
    >
      {children}
    </blockquote>
  );
};
