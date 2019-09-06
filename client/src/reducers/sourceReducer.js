import { CREATE_SOURCE } from "../actions/source";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_SOURCE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
