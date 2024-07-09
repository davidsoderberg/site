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
            lineHeight: 'text',
            fontSize: 'text',
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
