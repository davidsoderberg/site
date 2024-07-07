import { Header } from './components/Header';
import { Post } from './components/Post';
import { posts } from './routes';

export const Posts = () => {
  return (
    <Header>
      {posts.map((post, index) => {
        return (
          <Post
            hide={post.hide}
            to={post.path}
            selected={index === 0}
            style={
              index === 0
                ? {
                    marginTop: 200,
                  }
                : undefined
            }
          />
        );
      })}
    </Header>
  );
};
