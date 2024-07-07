import { PATHS } from '../routes';
import { DefaultProps } from '../types/defaultProps';
import { Post } from './Post';

export const LatestPost = ({
  className,
  style,
}: Omit<DefaultProps, 'children'>) => {
  return (
    <Post
      className={className}
      style={style}
      to={PATHS.WHICH_DAY_IS_YOUR_FAVORITE}
      selected={true}
    />
  );
};
