export const POST_COMMENTS_LOADING = "POST_COMMENTS_LOADING";
export const POST_COMMENTS_SUCCESS = "POST_COMMENTS_SUCCESS";
export const POST_COMMENTS_FAILURE = "POST_COMMENTS_FAILURE";

export interface IComment {
  content: string;
  postID: string;
  user_id: string;
  profileImage: string;
  name: string;
}

export interface ICommentsInitialState {
  postComments: IComment[];
  postCommentsLoading: boolean;
  postCommentsError: boolean;
}
export interface IGetPostCommentsSuccess {
  type:
    | "POST_COMMENTS_SUCCESS"
    | "POST_COMMENTS_LOADING"
    | "POST_COMMENTS_FAILURE";
  payload: IComment[];
}
