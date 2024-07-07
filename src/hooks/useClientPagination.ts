import { useEffect, useState } from 'react';

export const useClientPagination = <T>(all: T[], perPage: number) => {
  const [page, setPage] = useState(1);
  const [loading, setLoad] = useState(false);
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    setPage(1);
    setLoad(false);
    setItems([...all].slice(0, perPage));
  }, [all, perPage]);

  return {
    hasMore: all.length > page * perPage,
    loading,
    fetch: () => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setPage(page + 1);
        setItems([...all].slice(0, perPage * (page + 1)));
      }, 333 * perPage);
    },
    items,
  };
};
