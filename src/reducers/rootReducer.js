import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import chatReducer from "./chatReducer";
import backgroundImageReducer from "./backgroundImageReducer";
import breadcrumbReducer from "./breadcrumbReducer"; // Add the breadcrumb reducer

const rootReducer = combineReducers({
  content: contentReducer,
  chat: chatReducer,
  backgroundImage: backgroundImageReducer,
  breadcrumb: breadcrumbReducer, // Add the breadcrumb reducer
});

export default rootReducer;