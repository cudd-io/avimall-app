/**
 * Creates a pocketbase compatible ID using the original booth ID.
 *
 * @param {string} key - The original booth ID or whatever the main key/index is for the data.
 * @return {string} The PB ID created by padding the original booth ID.
 */
export const createPbID = (key: string | number): string => {
  const keyString = `${key}`;
  if (keyString.length >= 15) {
    return keyString.substring(0, 15);
  }
  return keyString.padStart(15, '0');
};
