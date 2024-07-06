import { hstack } from '../../styled-system/patterns';
import { Heading } from './Heading';
import { Date } from './Date';
import { css } from '../../styled-system/css';

export const PostHeader = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div
      className={hstack({
        justifyContent: 'space-between',
        marginBottom: '100',
      })}
    >
      <Heading>{title}</Heading>
      <Date className={css({ marginBottom: 0 })}>{date}</Date>
    </div>
  );
};
