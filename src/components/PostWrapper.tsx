import { DefaultProps } from '../types/defaultProps';
import { Header } from './Header';
import { PostHeader } from './PostHeader';

export const PostWrapper = ({ children }: Pick<DefaultProps, 'children'>) => {
  return (
    <Header>
      <PostHeader />
      {children}
    </Header>
  );
};
