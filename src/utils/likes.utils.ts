export const isLiked = (likes: string[], userId: string) => {
  return likes.findIndex((ele) => ele === userId) != -1 ? true : false;
};
