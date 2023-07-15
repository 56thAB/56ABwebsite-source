import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import chatReducer from './chatReducer';
import backgroundImageReducer from './backgroundImageReducer'; // Add the backgroundImage reducer

const rootReducer = combineReducers({
  content: contentReducer,
  chat: chatReducer,
  backgroundImage: backgroundImageReducer, // Add the backgroundImage reducer
});

export default rootReducer;
