import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Text = ({ children, className, style }: DefaultProps) => {
  return (
    <p
      className={cx(
        css(
          {
            color: 'white',
            marginBottom: '16px',
          },
          style
        ),
        className
      )}
    >
      {children}
    </p>
  );
};
