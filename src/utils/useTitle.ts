import { useEffect } from 'react';

export const useTitle = (title?: string) => {
  useEffect(() => {
    let documentTitle = 'David Söderberg';

    if (title) {
      documentTitle = `${title} | ${documentTitle}`;
    }

    document.title = documentTitle;
  }, [title]);
};
