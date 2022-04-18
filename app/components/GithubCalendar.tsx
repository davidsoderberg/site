import GitHubCalendar from 'react-github-calendar';

export const GithubCalendar = ({ username = 'davidsoderberg' }) => {
  return (
    <GitHubCalendar
      style={{
        marginTop: '30px',
        marginBottom: '30px',
      }}
      weekStart={1}
      theme={{
        level4: '#39d353',
        level3: '#26a641',
        level2: '#006d32',
        level1: '#0e4429',
        level0: '#2d333b',
      }}
      blockSize={16}
      showWeekdayLabels={true}
      username={username}
    />
  );
};
