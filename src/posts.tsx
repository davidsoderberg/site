import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { posts } from './routes';
import { center, hstack } from '../styled-system/patterns';
import { Tags } from './components/Tags';
import { Text } from './components/Text';
import { PostTags } from './types/post';
import { useClientPagination } from './hooks/useClientPagination';
import { When } from './components/When';
import { Link } from './components/Link';
import { css } from '../styled-system/css';

export const Posts = () => {
  const [selectedTag, setSelectedTag] = useState<PostTags | undefined>();
  const filteredPosts = useMemo(() => {
    if (!selectedTag) {
      return posts.filter((post) => !post.hide);
    }

    return posts
      .filter((post) => !post.hide)
      .filter((post) => post.tags?.includes(selectedTag));
  }, [selectedTag]);
  const { items, hasMore, loading, fetch } = useClientPagination(
    filteredPosts,
    3
  );

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
            paddingRight: 50,
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
      {items.map((post, index) => {
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
      <div className={center()}>
        <When truthy={hasMore && !loading}>
          <Link
            href='#'
            onClick={(e) => {
              e.preventDefault();
              fetch();
            }}
          >
            Load more
          </Link>
        </When>
        <When truthy={loading}>
          <Text
            className={css({
              marginBottom: 0,
            })}
          >
            Loading...
          </Text>
        </When>
      </div>
    </Header>
  );
};
