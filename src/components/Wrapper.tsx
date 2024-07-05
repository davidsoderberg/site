import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Wrapper = ({ children, className, style }: DefaultProps) => {
  return (
    <div
      className={css({
        backgroundColor: 'background',
        width: '100%',
        minHeight: '100vh',
        border: '4px solid',
        borderColor: 'white',
        borderRadius: '8px',
        paddingBottom: '16px',
        boxShadow: 'defaultInset',
      })}
    >
      <div
        className={cx(
          css(
            {
              width: '80%',
              margin: '0 auto',
              paddingBottom: '8px',
            },
            style
          ),
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
