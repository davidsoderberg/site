import { Image } from './Image';
import { Link } from './Link';

export const GithubTopLangs = ({ username = 'davidsoderberg' }) => {
  return (
    <Link
      href={`https://github.com/${username}?tab=repositories`}
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src={`https://github-readme-stats-delta-ebon-21.vercel.app/api/top-langs/?username=${username}&langs_count=10&theme=dark&hide=PHP&bg_color=2A303C&text_color=fff`}
        alt='Top Langs'
        style={{ borderRadius: 'none' }}
      />
    </Link>
  );
};
