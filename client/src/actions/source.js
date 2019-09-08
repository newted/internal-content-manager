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

export async function updateSource(sourceId, values) {
  try {
    const res = await axios.put(`/api/sources/${sourceId}/update`, values);

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
