export const GithubTopLangs = ({username = 'davidsoderberg'}) => {
  return (
    <a
      href={`https://github.com/${username}?tab=repositories`}
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={`https://github-readme-stats-delta-ebon-21.vercel.app/api/top-langs/?username=${username}&langs_count=10&theme=dark&hide=PHP`}
        alt='Top Langs'
      />
    </a>
  );
};
