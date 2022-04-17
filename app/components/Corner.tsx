import { useEffect, useState } from 'react';
import GHCorner from 'react-gh-corner';

export const Corner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <GHCorner
      href='https://github.com/davidsoderberg/site'
      bgColor='#39d353'
      size={100}
      openInNewTab={true}
    />
  );
};
