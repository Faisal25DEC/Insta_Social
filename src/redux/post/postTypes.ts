export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";

export interface IPost {
  mediaUrl: string;
  caption: string | null;
  authorId?: string;
  author: string;
  authorImage: string;
  _id: string;
}
export interface IGetPostsAction {
  type: "GET_POSTS";
  payload: IPost[];
}

export interface IGetPostAction {
  type: "GET_POST";
  payload: IPost;
}
