import axios from "axios";

export const FETCH_KNOWLEDGE_MAP = "FETCH_KNOWLEDGE_MAP";

export const fetchKnowledgeMap = () => async dispatch => {
  try {
    const res = await axios.get("/api/knowledge-map/by-id");

    dispatch({
      type: FETCH_KNOWLEDGE_MAP,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
