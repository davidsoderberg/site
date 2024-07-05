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
              fontSize: 'small',
              fontWeight: 700,
              lineHeight: 'medium',
              marginTop: 100,
              marginBottom: 100,
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
        fontSize: 'medium',
        fontWeight: 700,
        lineHeight: 'large',
        marginTop: 100,
        marginBottom: 100,
      })}
    >
      {children}
    </h2>
  );
};
