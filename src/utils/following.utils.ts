export const isFollowing = (following: string[], userId: string) => {
  return following.findIndex((res) => res == userId) != -1 ? true : false;
};
