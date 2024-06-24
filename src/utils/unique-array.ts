export const getUniqueArray = <T>(array: T[]) => {
  //   return [...new Set(array)];
  return Array.from(new Set(array));
};
