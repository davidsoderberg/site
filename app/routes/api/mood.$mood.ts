import type { LoaderFunction} from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { admin } from '../../utils/admin.server';
import { Moods } from '../../utils/moods';
import { getRedis } from '../../utils/redis.server';

export const loader: LoaderFunction = async ({params, request}) => {
  const isAdmin = await admin(request);
  if(!isAdmin) {
    return redirect('/');
  }
  const mood = params.mood ? params.mood?.toLowerCase() : '';
  if(!Array.from(Object.values(Moods)).includes(mood)) {
    return [];
  }
  const redis = await getRedis();
  let moods: any[]|null = await redis.get('moods');
  if(!moods) {
    moods = [];
  }
  moods.push({
    mood,
    date: new Date().toISOString()
  });

  await redis.set('moods', moods);

  return moods;
}