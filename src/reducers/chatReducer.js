// chatReducer.js
import { UPDATE_CHAT_INPUT_MESSAGE, UPDATE_CHAT_INPUT_USERNAME } from '../actions';

const initialState = {
  inputMessage: '',
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHAT_INPUT_MESSAGE:
      return {
        ...state,
        chatInputMessage: action.payload,
      };
      case UPDATE_CHAT_INPUT_USERNAME:return {
        ...state,
        chatInputUsername: action.payload,
      }
    default:
      return state;
  }
  
};

export default chatReducer;