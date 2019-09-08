import { CREATE_SOURCE, FETCH_SOURCES } from "../actions/source";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SOURCES:
    case CREATE_SOURCE:
      return {
        ...state,
        ...action.payload
      };
    case "UPDATE_SOURCE":
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    default:
      return state;
  }
}
