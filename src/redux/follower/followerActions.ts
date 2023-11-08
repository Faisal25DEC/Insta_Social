import axios from "axios";
import { baseUrl, createAction } from "../util";
import { GET_FOLLOWERS_FOLLOWING } from "./followerTypes";
import { getCookie } from "../../utils/cookies";
import { Dispatch } from "redux";

export const getFollowersFollowing =
  (userId: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/followers/${userId}`);
      console.log(res);
      dispatch(createAction(GET_FOLLOWERS_FOLLOWING, res.data));
    } catch (err) {
      console.log(err);
    }
  };

export const followUser =
  (followerId: string, userId: string) => async (dispatch: Dispatch) => {
    try {
      const token = getCookie("jwttoken");
      const res = await axios.post(
        `${baseUrl}/followers/${followerId}`,
        { followerId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getFollowersFollowing(userId) as any);
    } catch (err) {
      console.log(err);
    }
  };

export const unfollowUser =
  (followerId: string, userId: string) => async (dispatch: Dispatch) => {
    const token = getCookie("jwttoken");
    try {
      const res = await axios.delete(`${baseUrl}/followers/${followerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getFollowersFollowing(userId) as any);
    } catch (err) {
      console.log(err);
    }
  };
