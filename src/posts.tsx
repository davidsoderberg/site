import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { posts } from './routes';
import { hstack } from '../styled-system/patterns';
import { Tags } from './components/Tags';
import { Text } from './components/Text';
import { PostTags } from './types/post';

export const Posts = () => {
  const [selectedTag, setSelectedTag] = useState<PostTags | undefined>();

  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return posts;
    }

    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [selectedTag]);

  return (
    <Header>
      <div
        className={hstack({
          marginTop: 200,
        })}
      >
        <Text
          style={{
            marginBottom: 0,
            fontWeight: 'bolder',
            paddingRight: 50
          }}
        >
          Filter by tag:
        </Text>
        <Tags
          tags={[PostTags.NOVU, PostTags.WORKOUT, PostTags.ISRAEL]}
          selected={selectedTag}
          onClick={(tag) => {
            if (selectedTag === tag) {
              setSelectedTag(undefined);

              return;
            }

            setSelectedTag(tag);
          }}
        />
      </div>
      {filteredPosts.map((post, index) => {
        return (
          <Post
            hide={post.hide}
            to={post.path}
            selected={post.selected}
            style={
              index === 0
                ? {
                    marginTop: 100,
                  }
                : undefined
            }
          />
        );
      })}
    </Header>
  );
};
