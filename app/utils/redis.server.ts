import { Redis } from '@upstash/redis'
import { getConfig } from './config.server';

export const getRedis = async () => {
  const config = await getConfig();
  return new Redis({
    url: config.UPSTASH_URL,
    token: config.UPSTASH_TOKEN,
  });
}