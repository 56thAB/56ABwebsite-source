import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
// Import other reducers if needed

const rootReducer = combineReducers({
  content: contentReducer,
  // Add other reducers here
});

export default rootReducer;
