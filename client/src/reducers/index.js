import { combineReducers } from "redux";
import knowledgeMapReducer from "./knowledgeMapReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
  knowledgeMap: knowledgeMapReducer,
  content: contentReducer
});
