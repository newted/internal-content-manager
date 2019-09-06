import { combineReducers } from "redux";
import knowledgeSubjectReducer from "./knowledgeSubjectReducer";
import contentReducer from "./contentReducer";
import sourceReducer from "./sourceReducer";

export default combineReducers({
  knowledgeSubjects: knowledgeSubjectReducer,
  content: contentReducer,
  source: sourceReducer
});
