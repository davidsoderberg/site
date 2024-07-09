import { cx } from '../../../styled-system/css';
import { grid } from '../../../styled-system/patterns';
import { DefaultProps } from '../../types/defaultProps';

export const GridContainer = ({
  children,
  className,
}: Omit<DefaultProps, 'style'>) => {
  return (
    <div className={cx(grid({ columns: 12, columnGap: 200 }), className)}>
      {children}
    </div>
  );
};
