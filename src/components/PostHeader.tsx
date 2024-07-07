import { hstack } from '../../styled-system/patterns';
import { Heading } from './Heading';
import { Date } from './Date';
import { css } from '../../styled-system/css';
import { posts } from '../routes';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Meta } from './Meta';
import { Post } from '../types/post';
import { Tags } from './Tags';

export const PostHeader = () => {
  const { pathname } = useLocation();

  const {
    title,
    date,
    excerpt,
    image,
    tags = [],
  }: Post = useMemo(() => {
    return posts.find((route) => route.path === pathname) as Post;
  }, [pathname]);

  return (
    <>
      <Meta title={title} description={excerpt} image={image} />
      <div
        className={hstack({
          justifyContent: 'space-between',
          marginBottom: '50',
          xsDown: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 0,
          },
        })}
      >
        <Heading>{title}</Heading>
        <Date className={css({ marginBottom: 0 })}>{date}</Date>
      </div>
      <div
        className={hstack({
          marginBottom: '100',
        })}
      >
        <Tags tags={tags} />
      </div>
    </>
  );
};
