import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Moods } from '../utils/moods';
import { getRedis } from '../utils/redis.server';

export const handle = {
  getSitemapEntries: () => [{ route: `/howis`, priority: 0.7 }],
};

export const meta: MetaFunction = () => {
  const title = `David Söderberg - How is David`;
  return {
    title,
    'og:title': title,
  };
};

export const loader = async () => {
  const redis = await getRedis();
  const moods: any[] | null = await redis.get('moods');
  if (!moods) {
    return {
      moods: [],
      mood: {
        mood: Moods.happy,
        date: new Date().toISOString(),
      },
    };
  }
  const mood = moods[moods.length - 1];
  return {
    mood,
    moods,
  };
};

export const MoodIcon = ({ mood }: { mood: string }) => {
  switch (mood) {
    case Moods.happy:
      return <>😃</>;
    case Moods.angry:
      return <>😡</>;
    case Moods.cold:
      return <>🥶</>;
    case Moods.confused:
      return <>🤯</>;
    case Moods.hot:
      return <>🥵</>;
    case Moods.sad:
      return <>😢</>;
    case Moods.strong:
      return <>💪</>;
    case Moods.tired:
      return <>🥱</>;
    case Moods.sick:
      return <>🤒</>;
    case Moods.hungry:
      return <>🍔</>;
    case Moods.tipsy: 
      return <>🍻</>;
    case Moods.sleeping:
      return <>😴</>;
    default:
      return <>😃</>;
  }
};

export default function Howis() {
  const { mood } = useLoaderData();
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '30px'
        }}
      >
        How is David?
      </h2>
      <span
        aria-label={mood.mood}
        style={{
          marginTop: '30px',
          display: 'block',
          textAlign: 'center',
          fontSize: '200px',
          lineHeight: '200px',
          textTransform: 'uppercase',
        }}
      >
        <MoodIcon mood={mood.mood} />
      </span>
      <label
        style={{
          marginTop: '10px',
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bolder',
          textTransform: 'uppercase',
        }}
      >
        {mood.mood}
      </label>
    </>
  );
}
