import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Card = ({ children, className, style }: DefaultProps) => {
  return (
    <div
      className={cx(
        css(
          {
            backgroundColor: 'card',
            borderRadius: 'default',
            marginBottom: 100,
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 100,
            paddingRight: 100,
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
