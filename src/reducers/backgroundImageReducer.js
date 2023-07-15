import { SET_BACKGROUND_IMAGE_PROPERTIES } from "../actions";
const initialState = {
  defaultImage: "default-image-url",
  newImage: "new-image-url",
};

const backgroundImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_IMAGE_PROPERTIES:
      return {
        ...state,
        newImage: action.payload,
      };
    default:
      return state;
  }
};

export default backgroundImageReducer;
