import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Quote = ({ children, className, style }: DefaultProps) => {
  return (
    <blockquote
      className={cx(
        css(
          {
            marginBottom: 100,
            borderLeft: 'quote',
            borderRight: 'quote',
            borderColor: 'white',
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 100,
            paddingRight: 100,
            borderRadius: 'default',
            '&:before': {
              color: 'white',
              content: 'open-quote',
              fontSize: 'quote',
              lineHeight: 'small',
              marginRight: 25,
              verticalAlign: '-2rem',
            },
            '& > p:last-of-type': {
              marginBottom: 0,
            },
            '&:after': {
              color: 'white',
              content: 'close-quote',
              fontSize: 'quote',
              lineHeight: 'small',
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
