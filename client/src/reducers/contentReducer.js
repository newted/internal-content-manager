import { FETCH_CONTENT } from "../actions/content";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
