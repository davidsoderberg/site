import { css } from '../../styled-system/css';
import { Card } from './Card';
import { Link } from './Link';
import { Text } from './Text';
import { Tags } from './Tags';
import { When } from './When';
import { Divider } from './Divider';
import { Bold } from './Bold';
import { SectionHeader } from './SectionHeader';
import { Row } from './Row';
import { usePost } from '../hooks/usePost';
import { DefaultProps } from '../types/defaultProps';

export const Post = ({
  to,
  className,
  selected = false,
  hide = false,
  isLast = false,
}: Omit<
  DefaultProps<{
    to: string;
    hide?: boolean;
    selected?: boolean;
    isLast?: boolean;
  }>,
  'children'
>) => {
  const { title, date, description, tags = [] } = usePost(to);

  if (hide) {
    return null;
  }

  return (
    <Card className={className} variant={selected ? 'default' : 'transparent'}>
      <SectionHeader>
        <Link href={to}>{title}</Link>
      </SectionHeader>
      <When truthy={date !== undefined}>
        <Bold>{date}</Bold>
      </When>
      <When truthy={description !== undefined}>
        <Text>{description}</Text>
      </When>
      <Row>
        <Tags tags={tags} />
      </Row>
      <When truthy={!isLast && !selected}>
        <Divider className={css({ marginTop: 200, marginBottom: 0 })} />
      </When>
    </Card>
  );
};
