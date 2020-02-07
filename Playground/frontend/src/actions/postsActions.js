// =========================================================================================
// ==================================   ACTIONS   ==========================================
// =========================================================================================
import { FETCH_POSTS } from "./type";

import ChadAPI from "../api/ChadAPI";

// GET POSTS
export const fetchPosts = () => async dispatch => {
  const response = await ChadAPI.get("Post/");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};