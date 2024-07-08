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
import { LatestPost } from './components/LatestPost';
import { Loader } from './components/Loader';

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

  const tags = useMemo(() => {
    return posts
      .map((post) => post.tags)
      .reduce((prev: PostTags[], current): PostTags[] => {
        if (!current) {
          return prev;
        }
        return [...prev, ...current];
      }, [] as PostTags[])
      .reduce((prev: PostTags[], current: PostTags): PostTags[] => {
        if (prev.includes(current)) {
          return prev;
        }

        return [...prev, current];
      }, [] as PostTags[]);
  }, []);

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
          tags={tags}
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
        const isLast = items.length - 1 === index;

        return (
          <Post
            hide={post.hide}
            to={post.path}
            isLast={isLast && !hasMore}
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
      <When truthy={items.length === 0 && selectedTag !== undefined}>
        <Text
          className={css({
            marginTop: 100,
          })}
        >
          No posts exists with tag <b>{selectedTag}</b>, but here is my
          recommended read:
        </Text>
        <LatestPost />
      </When>
      <When truthy={hasMore}>
        <div
          className={center({
            marginTop: 100,
          })}
        >
          <When truthy={!loading}>
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
            <Loader size='sm' />
          </When>
        </div>
      </When>
    </Header>
  );
};
