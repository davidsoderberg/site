import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Image = ({
  src,
  alt,
  className,
}: Omit<DefaultProps, 'children'> & { src: string; alt?: string }) => {
  return (
    <img
      src={src}
      className={cx(
        css({
          borderRadius: 'default',
          boxShadow: 'default',
        }),
        className
      )}
      alt={alt}
    />
  );
};
