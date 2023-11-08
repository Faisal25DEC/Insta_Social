export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";

interface IPost {
  mediaUrl: string;
  caption?: String;
  authorId: string;
  author: string;
  authorImage: string;
}
export interface IGetPostsAction {
  type: "GET_POSTS";
  payload: IPost[];
}

export interface IGetPostAction {
  type: "GET_POST";
  payload: IPost;
}
