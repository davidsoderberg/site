import { Link } from './Link';
import { Image } from './Image';
import { DefaultProps } from '../types/defaultProps';

export const GithubRepo = ({
  username = 'davidsoderberg',
  repo,
  alt,
  className,
}: Omit<
  DefaultProps<{
    username?: string;
    repo: string;
    alt: string;
  }>,
  'children'
>) => {
  return (
    <Link
      href={`https://github.com/${username}/${repo}`}
      target='_blank'
      rel='noreferrer'
      className={className}
    >
      <Image
        src={`https://github-readme-stats-delta-ebon-21.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=dark&bg_color=2A303C&text_color=fff&hide_border=true`}
        alt={alt}
      />
    </Link>
  );
};
