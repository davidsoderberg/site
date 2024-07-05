import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Heading = ({
  children,
  variant = 'h2',
  className,
  style,
}: DefaultProps & {
  variant?: 'h2' | 'h3';
}) => {
  if (variant === 'h3') {
    return (
      <h3
        className={cx(
          css(
            {
              color: 'white',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '20px',
              margin: '16px 0',
            },
            style
          ),
          className
        )}
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
