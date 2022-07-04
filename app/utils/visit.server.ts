import { commitCookie, getSession } from './cookie.server';
import { v4 as uuid } from 'uuid';
import { admin } from './admin.server';
import type { Session } from '@remix-run/node';

export const getVisitId = async (
  request: Request
): Promise<{
  headers: Headers;
  id: string;
}> => {
  const session: Session = await getSession(request);
  const isAdmin = await admin(request);
  const headers = new Headers();
  const id = session.get('visit-id') || uuid();
  if(isAdmin) {
    session.set('admin', true);
  }
  session.set('visit-id', id);
  const cookie = await commitCookie(session);
  headers.append('Set-Cookie', cookie);
  return {
    headers,
    id,
  };
};
