import GitHubCalendar from 'react-github-calendar';
import { token } from '../../styled-system/tokens';
import { center } from '../../styled-system/patterns';

export const GithubCalendar = ({ username = 'davidsoderberg' }) => {
  return (
    <div className={center()}>
      <GitHubCalendar
        style={{
          color: token('colors.white'),
          marginTop: token('spacing.150'),
          marginBottom: token('spacing.150'),
        }}
        weekStart={1}
        theme={{
          dark: [
            token('colors.primary'),
            token('colors.primary.1'),
            token('colors.primary.2'),
            token('colors.primary.3'),
            token('colors.card'),
          ],
          light: [
            token('colors.primary'),
            token('colors.primary.1'),
            token('colors.primary.2'),
            token('colors.primary.3'),
            token('colors.card'),
          ],
        }}
        blockSize={16}
        showWeekdayLabels={true}
        username={username}
      />
    </div>
  );
};
