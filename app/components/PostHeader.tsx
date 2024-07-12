import { PageHeader } from './PageHeader';
import { css, cx } from '../../styled-system/css';
import { Tags } from './Tags';
import { Text } from './Text';
import { Bold } from './Bold';
import { DefaultProps } from '../types/defaultProps';
import { Row } from './Row';
import { usePost } from '../hooks/usePost';

const PostHeaderRow = ({ className, children }: DefaultProps) => {
  return (
    <Row
      className={cx(
        css({
          justifyContent: 'space-between',
          smDown: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 50,
          },
        }),
        className
      )}
    >
      {children}
    </Row>
  );
};

export const PostHeader = () => {
  const { title, date, description, tags = [] } = usePost();

  return (
    <>
      <PostHeaderRow className={css({ marginBottom: 50 })}>
        <PageHeader>{title}</PageHeader>
        <Bold className={css({ marginBottom: 0 })}>{date || null}</Bold>
      </PostHeaderRow>
      <PostHeaderRow className={css({ marginBottom: 200 })}>
        <Text className={css({ fontStyle: 'italic', marginBottom: 0 })}>
          {description || null}
        </Text>
        <Row>
          <Tags tags={tags} />
        </Row>
      </PostHeaderRow>
    </>
  );
};
