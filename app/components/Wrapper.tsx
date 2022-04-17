import { Logo } from './Logo';
import { Menu } from './Menu';

export const Wrapper = ({ children }) => (
  <div className='wrapper'>
    <Logo />
    <Menu />
    {children}
  </div>
);
