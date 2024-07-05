import { css, cx } from '../../styled-system/css';
import { Text } from './Text';
import { DefaultProps } from '../types/defaultProps';

export const Date = ({ children, className, style }: DefaultProps) => {
  return (
    <Text
      className={cx(
        css(
          {
            fontWeight: 'bolder',
          },
          style
        ),
        className
      )}
    >
      {children}
    </Text>
  );
};
