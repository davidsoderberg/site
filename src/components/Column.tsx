import { cx } from '../../styled-system/css';
import { vstack } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';

export const Column = ({
  children,
  className,
}: Omit<DefaultProps, 'style'>) => {
  return <div className={cx(vstack(), className)}>{children}</div>;
};
