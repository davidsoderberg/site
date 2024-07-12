import { useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Post as IPost, PostTags } from '../../types/post';
import { posts } from '../../routes';
import { Tags } from '../../components/Tags';
import { Text } from '../../components/Text';
import { useClientPagination } from '../../hooks/useClientPagination';
import { When } from '../../components/When';
import { Link } from '../../components/Link';
import { LatestPost } from '../../components/LatestPost';
import { Loader } from '../../components/Loader';
import { Center } from '../../components/Center';
import { Bold } from '../../components/Bold';
import { Row } from '../../components/Row';
import { css } from '../../../styled-system/css';

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
  const { items, hasMore, loading, fetch } = useClientPagination<IPost>(
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
      <Row
        className={css({
          marginTop: 200,
          marginBottom: 100,
        })}
      >
        <Bold
          className={css({
            marginBottom: 0,
            paddingRight: 50,
          })}
        >
          Filter by tag:
        </Bold>
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
      </Row>
      {items.map((post, index) => {
        const isLast = items.length - 1 === index && !hasMore;

        return (
          <Post
            key={post.path}
            hide={post.hide}
            to={post.path}
            isLast={isLast}
            selected={post.selected}
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
        <Center className={css({ marginTop: 100 })}>
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
        </Center>
      </When>
    </Header>
  );
};

export default Posts;
