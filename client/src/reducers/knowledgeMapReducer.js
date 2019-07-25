import { FETCH_KNOWLEDGE_MAP } from "../actions/knowledgeMap";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_KNOWLEDGE_MAP:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
