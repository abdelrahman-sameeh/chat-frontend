import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { friendReducer } from "./friendReducer";
import { chatReducer } from "./chatReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  friend: friendReducer,
  chat: chatReducer,
  user: userReducer
});
