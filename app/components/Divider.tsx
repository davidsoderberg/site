import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Divider = ({ className }: Omit<DefaultProps, 'children'>) => {
  return (
    <hr
      className={cx(
        css({
          borderColor: 'border',
          marginBottom: 100,
          border: 'default',
        }),
        className
      )}
    />
  );
};
