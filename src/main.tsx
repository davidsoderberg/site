import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { Wrapper } from './components/Wrapper.tsx';
import { TwoTimesInIsraelPart2 } from './two-times-in-israel-part-2.tsx';
import { TwoTimesInIsraelPart1 } from './two-times-in-israel-part-1.tsx';
import { AWeekInCyprusWithNovu } from './a-week-in-cyprus-with-novu.tsx';
import { FiveMonthsOfRemoteWork } from './five-months-of-remote-work.tsx';
import { FirstTwoMonths } from './first-two-months.tsx';
import { TheFirstSwedishGuyAtNovu } from './the-first-swedish-guy-at-novu.tsx';
import { WhichDayIsYourFavorite } from './which-day-is-your-favorite.tsx';

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
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </React.StrictMode>
);
