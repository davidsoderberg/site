import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Divider = ({
  className,
  style,
}: Omit<DefaultProps, 'children'>) => {
  return (
    <hr
      className={cx(
        css(
          {
            borderColor: 'border',
            marginBottom: '16px',
            borderWidth: '1px',
          },
          style
        ),
        className
      )}
    />
  );
};
