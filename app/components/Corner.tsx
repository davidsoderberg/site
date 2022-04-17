import { useEffect, useState } from 'react';
import GHCorner from 'react-gh-corner';

export const Corner = ({ href = 'https://github.com/davidsoderberg/site' }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <GHCorner href={href} bgColor='#39d353' size={100} openInNewTab={true} />
  );
};
