import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Card = ({ children, className, style }: DefaultProps) => {
  return (
    <div
      className={cx(
        css(
          {
            backgroundColor: 'selectedPost',
            borderRadius: '8px',
            marginBottom: '16px',
            padding: '8px 16px',
            boxShadow: 'default',
          },
          style
        ),
        className
      )}
    >
      {children}
    </div>
  );
};
