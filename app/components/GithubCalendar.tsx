import GitHubCalendar, { ColorScale } from 'react-github-calendar';
import { token } from '../../styled-system/tokens';
import { Center } from './Center';
import { useEffect, useState } from 'react';

export const GithubCalendar = ({
  username = 'davidsoderberg',
}: {
  username?: string;
}) => {
  const [isServer, setIsServer] = useState(true);
  const theme: ColorScale = [
    token('colors.primary'),
    token('colors.primary2'),
    token('colors.primary4'),
    token('colors.primary6'),
    token('colors.card'),
  ];

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) {
    return null;
  }

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
