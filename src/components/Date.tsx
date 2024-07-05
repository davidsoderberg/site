import { ReactNode } from 'react';
import { css } from '../../styled-system/css';
import { Text } from './Text';

export const Date = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      className={css({
        fontWeight: 'bolder',
      })}
    >
      {children}
    </Text>
  );
};
