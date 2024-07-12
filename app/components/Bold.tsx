import { css, cx } from '../../styled-system/css';
import { Text } from './Text';
import { DefaultProps } from '../types/defaultProps';

export const Bold = ({ children, className }: DefaultProps) => {
  return (
    <Text
      className={cx(
        css({
          fontWeight: 'bold',
        }),
        className
      )}
    >
      {children}
    </Text>
  );
};
