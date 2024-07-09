import { DefaultProps } from '../types/defaultProps';

export const Box = ({ children, className }: DefaultProps) => (
  <div className={className}>{children}</div>
);
