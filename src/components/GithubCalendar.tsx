import GitHubCalendar from 'react-github-calendar';
import { token } from '../../styled-system/tokens';
import { center } from '../../styled-system/patterns';

export const GithubCalendar = ({ username = 'davidsoderberg' }) => {
  return (
    <div
      className={center({
        marginTop: 100,
        marginBottom: 100,
      })}
    >
      <GitHubCalendar
        style={{
          color: token('colors.white'),
        }}
        weekStart={1}
        theme={{
          dark: ['#39d353', '#26a641', '#006d32', '#0e4429', '#2d333b'],
          light: ['#39d353', '#26a641', '#006d32', '#0e4429', '#2d333b'],
        }}
        blockSize={16}
        showWeekdayLabels={true}
        username={username}
      />
    </div>
  );
};
