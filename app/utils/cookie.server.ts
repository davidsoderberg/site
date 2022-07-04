import type { Session, SessionStorage } from '@remix-run/node';
import { createCookie, createCookieSessionStorage } from '@remix-run/node';
import { getConfig } from './config.server';

export const getCookieStorage = async (): Promise<SessionStorage> => {
  const config = await getConfig();
  const sessionCookie = createCookie('david-southmountain', {
    domain: new URL(config.URL).hostname,
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    secrets: [config.PREVIEW_SECRET],
  });

  return createCookieSessionStorage({
    cookie: sessionCookie,
  });
};

export const getSession = async (request: Request): Promise<Session> => {
  const sessionStorage = await getCookieStorage();
  return await sessionStorage.getSession(request.headers.get('Cookie'));
};

export const commitCookie = async (session: Session): Promise<string> => {
  const sessionStorage = await getCookieStorage();
  return await sessionStorage.commitSession(session);
};
