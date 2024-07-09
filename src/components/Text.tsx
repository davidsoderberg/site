import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Text = ({ children, className }: DefaultProps) => {
  return (
    <p
      className={cx(
        css({
          color: 'white',
          marginBottom: 100,
          lineHeight: 'text',
          fontSize: 'text',
        }),
        className
      )}
    >
      {children}
    </p>
  );
};
