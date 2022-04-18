export const getDomainUrl = (request: Request) => {
  const host =request.headers.get('host');
  if (!host) {
    throw new Error();
  }
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
};
