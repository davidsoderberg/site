import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const PageHeader = ({ children, className }: DefaultProps) => {
  return (
    <h2
      className={cx(
        css({
          color: 'white',
          fontSize: 'pageHeader',
          fontWeight: 'bold',
          lineHeight: 'pageHeader',
          marginTop: 100,
          marginBottom: 100,
        }),
        className
      )}
    >
      {children}
    </h2>
  );
};
