import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const PageHeader = ({ children, className, style }: DefaultProps) => {
  return (
    <h2
      className={cx(
        css(
          {
            color: 'white',
            fontSize: 'pageHeader',
            fontWeight: 'bold',
            lineHeight: 'pageHeader',
            marginTop: 100,
            marginBottom: 100,
          },
          style
        ),
        className
      )}
    >
      {children}
    </h2>
  );
};
