import { Post, PostTags } from './types/post';

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
  BEING_SWEDISH_IN_A_GLOBAL_COMPANY:
    POSTS + '/being-swedish-in-a-global-company',
  EAT_TO_WORKOUT_OR_WORKOUT_TO_EAT: POSTS + '/eat-to-workout-or-workout-to-eat',
  CATCH_ALL: '*',
};

export const CATCH_ALL: Post = {
  path: PATHS.CATCH_ALL,
  title: '404 not found',
};

export const routes: Post[] = [
  {
    path: PATHS.ROOT,
    title: 'Software Developer',
  },
  {
    path: PATHS.POSTS,
    title: 'Posts',
    description: 'All posts created by me',
  },
  CATCH_ALL,
  {
    path: PATHS.TWO_TIMES_IN_ISRAEL_PART_2,
    title: 'Two times in Israel (part 2)',
    description:
      'Amazing week in Israel... Welcome to Israel. Your life will never be the same.',
    date: '2023-02-05',
    image: 'israel.png',
    tags: [PostTags.ISRAEL],
  },
  {
    path: PATHS.TWO_TIMES_IN_ISRAEL_PART_1,
    title: 'Two times in Israel (part 1)',
    description:
      'Amazing week in Israel... Welcome to Israel. Your life will never be the same.',
    date: '2023-02-04',
    image: 'israel.png',
    tags: [PostTags.ISRAEL],
  },
  {
    path: PATHS.A_WEEK_IN_CYPRUS_WITH_NOVU,
    title: 'A week in Cyprus with Novu',
    description: 'An amazing week that I will never forget.',
    date: '2022-09-17',
    image: 'door.jpg',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.FIVE_MONTHS_OF_REMOTE_WORK,
    title: 'Five months of remote work',
    description: 'How my first five months at Novu have been this far...',
    date: '2022-08-31',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.FIRST_TWO_MONTHS,
    title: 'The first two months at Novu',
    description: 'About my two first month at Novu.',
    date: '2022-06-01',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.THE_FIRST_SWEDISH_GUY_AT_NOVU,
    title: 'The first Swedish guy at Novu',
    description: 'About how I ended up at Novu after a few video calls.',
    date: '2022-04-05',
    tags: [PostTags.NOVU],
  },
  {
    path: PATHS.WHICH_DAY_IS_YOUR_FAVORITE,
    title: 'Which day is your favorite?',
    description: '1 year and 4 months since last post :O',
    date: '2024-07-05',
    tags: [PostTags.ISRAEL, PostTags.WORKOUT, PostTags.NOVU],
  },
  {
    path: PATHS.BEING_SWEDISH_IN_A_GLOBAL_COMPANY,
    title: 'Being Swedish in a global company',
    description: 'A post about the swedish "vemod" and "Jante".',
    date: '2024-07-07',
    selected: true,
    tags: [PostTags.SWEDEN, PostTags.NOVU],
  },
  {
    path: PATHS.EAT_TO_WORKOUT_OR_WORKOUT_TO_EAT,
    title: 'Eat to workout, or workout to eat?',
    description:
      'Workout to eat what every I like to did I do for a long time...',
    date: '2024-07-21',
    selected: true,
    hide: true,
    tags: [PostTags.WORKOUT],
  },
];

type PostWithDate = Omit<Post, 'date'> & { date: string };

export const posts: Post[] = routes
  .filter(
    (page) => page.path?.includes(PATHS.POSTS) && page.path !== PATHS.POSTS
  )
  .map((post) => post as PostWithDate)
  .sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }

    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });
