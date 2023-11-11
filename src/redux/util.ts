import { State } from "./store";

export const createAction = (type: string, payload?: State) => {
  return {
    type,
    payload,
  };
};
export const localBaseUrl = "http://localhost:8080";
export const baseUrl = process.env.REACT_APP_BASE_URL;
