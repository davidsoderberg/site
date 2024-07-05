import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Text = ({ children, className, style }: DefaultProps) => {
  return (
    <p
      className={cx(
        css(
          {
            color: 'white',
            marginBottom: 100,
            lineHeight: 'large',
            fontSize: 'default',
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
