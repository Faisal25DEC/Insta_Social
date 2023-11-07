export const isFollowing = (following, userId) => {
  return following.findIndex((res) => res == userId) != -1 ? true : false;
};
