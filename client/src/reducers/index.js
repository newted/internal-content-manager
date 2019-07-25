import { combineReducers } from "redux";
import knowledgeMapReducer from "./knowledgeMapReducer";

export default combineReducers({
  knowledgeMap: knowledgeMapReducer
});
