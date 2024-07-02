import { css } from '../../styled-system/css';
import { Heading } from './Heading';

export const Post = ({
  to,
  title,
  excerpt,
  date,
  hide = false,
}: {
  to: string;
  title: string;
  excerpt: string;
  date: string;
  hide?: boolean;
}) => {
  if (hide) {
    return null;
  }

  return (
    <div
      className={css({
        borderBottom: '1px solid #373C48',
        marginBottom: '32px',
      })}
    >
      <a href={to}>
        <Heading>{title}</Heading>
      </a>
      <p>{date}</p>
      <p>{excerpt}</p>
    </div>
  );
};
