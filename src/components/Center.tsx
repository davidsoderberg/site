import { cx } from '../../styled-system/css';
import { center } from '../../styled-system/patterns';
import { DefaultProps } from '../types/defaultProps';

export const Center = ({
  children,
  className,
}: Omit<DefaultProps, 'style'>) => {
  return <div className={cx(center(), className)}>{children}</div>;
};
