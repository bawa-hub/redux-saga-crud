import { combineReducers } from "redux";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;
