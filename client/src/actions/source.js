import axios from "axios";

export const CREATE_SOURCE = "CREATE_SOURCE";

export const createSource = values => async dispatch => {
  try {
    const res = await axios.post("/api/sources", values);

    dispatch({
      type: CREATE_SOURCE,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
