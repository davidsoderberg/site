import { useLoaderData } from '@remix-run/react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { When } from './When';

export const Wrapper = ({ children }) => {
  const { isHowIs } = useLoaderData();
  return (
    <div className='wrapper'>
      <Logo />
      <When truthy={!isHowIs}>
        <Menu />
      </When>
      {children}
    </div>
  );
};
