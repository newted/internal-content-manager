import axios from "axios";

export const FETCH_KNOWLEDGE_SUBJECTS = "FETCH_KNOWLEDGE_SUBJECTS";

export const fetchKnowledgeSubjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/knowledge-subject/by-id");

    dispatch({
      type: FETCH_KNOWLEDGE_SUBJECTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
