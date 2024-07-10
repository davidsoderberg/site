import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { Wrapper } from './components/Wrapper.tsx';
import { Meta } from './components/Meta.tsx';
import { Analytics } from './components/Analytics.tsx';
import { routes } from './routes.tsx';

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <>
      <Meta />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
      <Analytics />
    </>
  );
};
