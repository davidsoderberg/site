import { RouteObject } from 'react-router-dom';
import { App } from './App';
import { Posts } from './posts';
import { AWeekInCyprusWithNovu } from './posts/a-week-in-cyprus-with-novu';
import { FirstTwoMonths } from './posts/first-two-months';
import { FiveMonthsOfRemoteWork } from './posts/five-months-of-remote-work';
import { TheFirstSwedishGuyAtNovu } from './posts/the-first-swedish-guy-at-novu';
import { TwoTimesInIsraelPart1 } from './posts/two-times-in-israel-part-1';
import { TwoTimesInIsraelPart2 } from './posts/two-times-in-israel-part-2';
import { WhichDayIsYourFavorite } from './posts/which-day-is-your-favorite';
import { CatchAll } from './CatchAll';
import { Post, PostTags } from './types/post';
import { BeingSwedishInAGlobalCompany } from './posts/being-swedish-in-a-global-company';
import { EatToWorkoutOrWorkoutToEat } from './posts/eat-to-workout-or-workout-to-eat';

export const POSTS = '/posts';

export const PATHS = {
  ROOT: '/',
  POSTS,
  TWO_TIMES_IN_ISRAEL_PART_1: POSTS + '/two-times-in-israel-part-1',
  TWO_TIMES_IN_ISRAEL_PART_2: POSTS + '/two-times-in-israel-part-2',
  A_WEEK_IN_CYPRUS_WITH_NOVU: POSTS + '/a-week-in-cyprus-with-novu',
  FIVE_MONTHS_OF_REMOTE_WORK: POSTS + '/five-months-of-remote-work',
  FIRST_TWO_MONTHS: POSTS + '/first-two-months',
  THE_FIRST_SWEDISH_GUY_AT_NOVU: POSTS + '/the-first-swedish-guy-at-novu',
  WHICH_DAY_IS_YOUR_FAVORITE: POSTS + '/which-day-is-your-favorite',
  BEING_SWEDISH_IN_A_GLOBAL_COMPANY: POSTS + '/being-swedish-in-a-global-company',
  EAT_TO_WORKOUT_OR_WORKOUT_TO_EAT: POSTS + '/eat-to-workout-or-workout-to-eat',
  CATCH_ALL: '*',
};

export const pages: (RouteObject | Post)[] = [
  {
    path: PATHS.ROOT,
    element: <App />,
  },
  {
    path: PATHS.POSTS,
    element: <Posts />,
  },
  {
    path: PATHS.CATCH_ALL,
    element: <CatchAll />,
  },
  {
    path: PATHS.TWO_TIMES_IN_ISRAEL_PART_2,
    element: <TwoTimesInIsraelPart2 />,
    title: 'Two times in Israel (part 2)',
    excerpt:
      'Amazing week in Israel... Welcome to Israel. Your life will never be the same.',
    date: '2023-02-05',
    image: 'israel.png',
    tags: [PostTags.ISRAEL],
  },
  {
    path: PATHS.TWO_TIMES_IN_ISRAEL_PART_1,
    element: <TwoTimesInIsraelPart1 />,
    title: 'Two times in Israel (part 1)',
    excerpt:
      'Amazing week in Israel... Welcome to Israel. Your life will never be the same.',
    date: '2023-02-04',
    image: 'israel.png',
    tags: [PostTags.ISRAEL],
  },
  {
    path: PATHS.A_WEEK_IN_CYPRUS_WITH_NOVU,
    element: <AWeekInCyprusWithNovu />,
    title: 'A week in Cyprus with Novu',
    excerpt: 'An amazing week that I will never forget.',
    date: '2022-09-17',
    image: 'door.jpg',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.FIVE_MONTHS_OF_REMOTE_WORK,
    element: <FiveMonthsOfRemoteWork />,
    title: 'Five months of remote work',
    excerpt: 'How my first five months at Novu have been this far...',
    date: '2022-08-31',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.FIRST_TWO_MONTHS,
    element: <FirstTwoMonths />,
    title: 'The first two months at Novu',
    excerpt: 'About my two first month at Novu.',
    date: '2022-06-01',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.THE_FIRST_SWEDISH_GUY_AT_NOVU,
    element: <TheFirstSwedishGuyAtNovu />,
    title: 'The first Swedish guy at Novu',
    excerpt: 'About how I ended up at Novu after a few video calls.',
    date: '2022-04-05',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.WHICH_DAY_IS_YOUR_FAVORITE,
    element: <WhichDayIsYourFavorite />,
    title: 'Which day is your favorite?',
    excerpt: '1 year and 4 months since last post :O',
    date: '2024-07-05',
    tags: [PostTags.ISRAEL, PostTags.WORKOUT, PostTags.NOVU],
  },
  {
    path: PATHS.BEING_SWEDISH_IN_A_GLOBAL_COMPANY,
    element: <BeingSwedishInAGlobalCompany />,
    title: 'Being Swedish in a global company',
    excerpt: 'A post about the swedish "vemod" and "Jante".',
    date: '2024-07-07',
    selected: true,
    tags: [PostTags.SWEDEN, PostTags.NOVU],
  },
  {
    path: PATHS.EAT_TO_WORKOUT_OR_WORKOUT_TO_EAT,
    element: <EatToWorkoutOrWorkoutToEat />,
    title: 'Eat to workout, or workout to eat?',
    excerpt: 'Workout to eat what every I like to did I do for a long time...',
    date: '2024-07-21',
    selected: true,
    hide: true,
    tags: [PostTags.WORKOUT],
  },
];

export const posts: Post[] = pages
  .filter(
    (page) => page.path?.includes(PATHS.POSTS) && page.path !== PATHS.POSTS
  )
  .map((post) => post as Post)
  .sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }

    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });

export const routes: RouteObject[] = pages.map((page) => ({
  path: page.path,
  element: page.element,
}));
