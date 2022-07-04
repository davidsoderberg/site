import { getConfig } from './config.server';
import { getSession } from './cookie.server';

export const admin = async (request: Request): Promise<boolean> => {
  const config = await getConfig();
  const session = await getSession(request);

  if(session.get('admin')) {
    return true;
  }
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  return searchParams.get('preview') === config.PREVIEW_SECRET;
}