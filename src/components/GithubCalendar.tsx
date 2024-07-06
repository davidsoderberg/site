import GitHubCalendar from 'react-github-calendar';
import { css } from '../../styled-system/css';
import { token } from '../../styled-system/tokens';

export const GithubCalendar = ({ username = 'davidsoderberg' }) => {
  return (
    <div
      className={css({
        marginTop: 200,
        marginBottom: 200,
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
