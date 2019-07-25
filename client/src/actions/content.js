import axios from "axios";

export const FETCH_CONTENT = "FETCH_CONTENT";

export const fetchContent = () => async dispatch => {
  try {
    const res = await axios.get("/api/content/item/by-id");

    dispatch({
      type: FETCH_CONTENT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
