export const GET_FOLLOWERS_FOLLOWING = "GET_FOLLOWERS_FOLLOWING";

export interface IGetFollowersFollowingAction {
  type: "GET_FOLLOWERS_FOLLOWING";
  payload: {
    followers: string;
    following: string;
  };
}
