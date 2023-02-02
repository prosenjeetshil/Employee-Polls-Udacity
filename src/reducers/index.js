import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import * as loadingBarModule from "react-redux-loading-bar";

const { loadingBarReducer: loadingBar } = loadingBarModule;

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar,
});
