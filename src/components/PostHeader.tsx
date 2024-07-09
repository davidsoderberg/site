import { PageHeader } from './PageHeader';
import { css, cx } from '../../styled-system/css';
import { useLocation } from 'react-router-dom';
import { Meta } from './Meta';
import { Tags } from './Tags';
import { Text } from './Text';
import { Bold } from './Bold';
import { DefaultProps } from '../types/defaultProps';
import { Row } from './Row';
import { usePost } from '../hooks/usePost';

const PostHeaderRow = ({ className, children, style }: DefaultProps) => {
  return (
    <Row
      className={cx(
        css(
          {
            justifyContent: 'space-between',
            xsDown: {
              alignItems: 'flex-start',
              flexDirection: 'column',
              gap: 50,
            },
          },
          style
        ),
        className
      )}
    >
      {children}
    </Row>
  );
};

export const PostHeader = () => {
  const { pathname } = useLocation();
  const { title, date, excerpt, image, tags = [] } = usePost(pathname);

  return (
    <>
      <Meta title={title} description={excerpt} image={image} />
      <PostHeaderRow className={css({ marginBottom: 50 })}>
        <PageHeader>{title}</PageHeader>
        <Bold className={css({ marginBottom: 0 })}>{date}</Bold>
      </PostHeaderRow>
      <PostHeaderRow className={css({ marginBottom: 200 })}>
        <Text className={css({ fontStyle: 'italic', marginBottom: 0 })}>
          {excerpt}
        </Text>
        <Row>
          <Tags tags={tags} />
        </Row>
      </PostHeaderRow>
    </>
  );
};
