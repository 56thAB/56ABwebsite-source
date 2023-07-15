import { SET_BACKGROUND_IMAGE_LINK } from '../actions';

const initialState = {
  link: "",
};

const backgroundImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_IMAGE_LINK:
      return {
        ...state,
        link: action.payload,
      };
    default:
      return state;
  }
};

export default backgroundImageReducer;