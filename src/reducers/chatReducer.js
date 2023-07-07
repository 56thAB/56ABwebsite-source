// chatReducer.js
import { UPDATE_INPUT_MESSAGE } from '../actions';

const initialState = {
  inputMessage: '',
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;