import { combineReducers } from "redux";
import knowledgeSubjectReducer from "./knowledgeSubjectReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
  knowledgeSubjects: knowledgeSubjectReducer,
  content: contentReducer
});
