// rootReducer.js
import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  content: contentReducer,
  chat: chatReducer, // Add the chat reducer
  // Add other reducers here
});

export default rootReducer;