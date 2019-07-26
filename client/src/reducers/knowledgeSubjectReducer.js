import { FETCH_KNOWLEDGE_SUBJECTS } from "../actions/knowledgeSubject";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_KNOWLEDGE_SUBJECTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
