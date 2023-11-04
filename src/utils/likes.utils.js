export const isLiked = (likes, userId) => {
  return likes.findIndex((ele) => ele === userId) != -1 ? true : false;
};
