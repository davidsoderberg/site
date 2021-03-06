import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Moods } from '../utils/moods';
import { getRedis } from '../utils/redis.server';

export const handle = {
  getSitemapEntries: () => [{ route: `/howis`, priority: 0.7 }],
};

export const meta: MetaFunction = () => {
  const title = `David SΓΆderberg - How is David`;
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
      return <>π</>;
    case Moods.angry:
      return <>π‘</>;
    case Moods.cold:
      return <>π₯Ά</>;
    case Moods.confused:
      return <>π€―</>;
    case Moods.hot:
      return <>π₯΅</>;
    case Moods.sad:
      return <>π’</>;
    case Moods.strong:
      return <>πͺ</>;
    case Moods.tired:
      return <>π₯±</>;
    case Moods.sick:
      return <>π€</>;
    case Moods.hungry:
      return <>π</>;
    case Moods.tipsy: 
      return <>π»</>;
    case Moods.sleeping:
      return <>π΄</>;
    default:
      return <>π</>;
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
