import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export const MDX = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
};