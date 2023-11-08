export const GET_POST_LIKES = "GET_POST_LIKES";

export interface IGetLikesAction {
  type: "GET_POST_LIKES";
  payload: string[];
}
