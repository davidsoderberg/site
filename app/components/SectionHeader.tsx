import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const SectionHeader = ({ children, className }: DefaultProps) => {
  return (
    <h3
      className={cx(
        css({
          color: 'white',
          fontSize: 'sectionHeader',
          fontWeight: 'bold',
          lineHeight: 'sectionHeader',
          marginTop: 100,
          marginBottom: 100,
        }),
        className
      )}
    >
      {children}
    </h3>
  );
};
