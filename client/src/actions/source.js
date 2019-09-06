import axios from "axios";

export const CREATE_SOURCE = "CREATE_SOURCE";
export const FETCH_SOURCES = "FETCH_SOURCES";

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

export const fetchSources = () => async dispatch => {
  try {
    const res = await axios.get("/api/sources");

    dispatch({
      type: FETCH_SOURCES,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
