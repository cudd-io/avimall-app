export const load = ({ locals, url }) => {
  const user = locals.user || undefined;

  return {
    url: url.pathname,
    user,
  };
};
