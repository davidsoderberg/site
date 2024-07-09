import { cx } from '../../styled-system/css';
import { hstack } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';

export const Row = ({
  className,
  children,
}: Omit<DefaultProps, 'style'>) => {
  return <div className={cx(hstack(), className)}>{children}</div>;
};
