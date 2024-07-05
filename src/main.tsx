import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css';
import { Wrapper } from './components/Wrapper.tsx';
import { TwoTimesInIsraelPart2 } from './posts/two-times-in-israel-part-2.tsx';
import { TwoTimesInIsraelPart1 } from './posts/two-times-in-israel-part-1.tsx';
import { AWeekInCyprusWithNovu } from './posts/a-week-in-cyprus-with-novu.tsx';
import { FiveMonthsOfRemoteWork } from './posts/five-months-of-remote-work.tsx';
import { FirstTwoMonths } from './posts/first-two-months.tsx';
import { TheFirstSwedishGuyAtNovu } from './posts/the-first-swedish-guy-at-novu.tsx';
import { WhichDayIsYourFavorite } from './posts/which-day-is-your-favorite.tsx';
import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/two-times-in-israel-part-2',
    element: <TwoTimesInIsraelPart2 />,
  },
  {
    path: '/two-times-in-israel-part-1',
    element: <TwoTimesInIsraelPart1 />,
  },
  {
    path: '/a-week-in-cyprus-with-novu',
    element: <AWeekInCyprusWithNovu />,
  },
  {
    path: '/five-months-of-remote-work',
    element: <FiveMonthsOfRemoteWork />,
  },
  {
    path: '/first-two-months',
    element: <FirstTwoMonths />,
  },
  {
    path: '/the-first-swedish-guy-at-novu',
    element: <TheFirstSwedishGuyAtNovu />,
  },
  {
    path: '/which-day-is-your-favorite',
    element: <WhichDayIsYourFavorite />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
      <meta
        name='description'
        content='I am David and this is a website about me as a developer. I am currently working as a Software Engineer with a Typescript stack at @novuhq.'
      />
      <meta
        property='og:image'
        content='https://www.davidsouthmountain.se/me.jpeg'
      />
    </Helmet>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
