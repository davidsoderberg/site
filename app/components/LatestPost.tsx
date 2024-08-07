import { useMemo } from 'react';
import { posts } from '../routes';
import { DefaultProps } from '../types/defaultProps';
import { Post } from './Post';
import { Post as IPost } from '../types/post';

export const LatestPost = ({ className }: Omit<DefaultProps, 'children'>) => {
  const post: IPost = useMemo(
    () => posts.filter((post) => !post.hide).at(0) as IPost,
    []
  );

  return <Post className={className} to={post.path} selected={true} />;
};
