import GitHubCalendar, { ColorScale } from 'react-github-calendar';
import { token } from '../../styled-system/tokens';
import { Center } from './Center';

export const GithubCalendar = ({ username = 'davidsoderberg' }) => {
  const theme: ColorScale = [
    token('colors.primary'),
    token('colors.primary2'),
    token('colors.primary4'),
    token('colors.primary6'),
    token('colors.card'),
  ];

  return (
    <Center>
      <GitHubCalendar
        style={{
          color: token('colors.white'),
          marginTop: token('spacing.150'),
          marginBottom: token('spacing.150'),
        }}
        weekStart={1}
        theme={{
          dark: theme,
          light: theme,
        }}
        blockSize={16}
        showWeekdayLabels={true}
        username={username}
      />
    </Center>
  );
};
