import axios from "axios";
import { GET_POST_LIKES } from "./likeTypes";
import { baseUrl, createAction } from "../util";
import { Dispatch } from "redux";

export const likePost =
  (postId: string, token: string) => async (dispatch: Dispatch) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const res = await axios.patch(`${baseUrl}/likes/like/${postId}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        resolve();
        console.log(res.data);
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  };
export const unlikePost =
  (postId: string, token: string) => async (dispatch: Dispatch) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const res = await axios.patch(
          `${baseUrl}/likes/unlike/${postId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        resolve();
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  };
