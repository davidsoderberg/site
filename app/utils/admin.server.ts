import { getConfig } from './config.server';

export const admin = async (request: Request) => {
  const config = await getConfig();
  console.log(config);
  
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  return searchParams.get('preview') === config.PREVIEW_SECRET;
}