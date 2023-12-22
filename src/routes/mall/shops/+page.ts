export const load = async ({ fetch }) => {
  const response = await fetch('/api/shops');
  const shops = await response.json();

  return {
    shops,
  };
};
