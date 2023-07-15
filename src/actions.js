
export const UPDATE_CHAT_INPUT_MESSAGE = "UPDATE_CHAT_INPUT_MESSAGE";
export const UPDATE_CHAT_INPUT_USERNAME = "UPDATE_CHAT_INPUT_USERNAME";
export const SET_BACKGROUND_IMAGE_PROPERTIES = "SET_BACKGROUND_IMAGE_PROPERTIES"; // New action type



export const updateChatInputMessage = (message) => {
  return {
    type: UPDATE_CHAT_INPUT_MESSAGE,
    payload: message,
  };
};
export const updateChatInputUsername = (username) => {
  return {
    type: UPDATE_CHAT_INPUT_USERNAME,
    payload: username,
  };
  
};
export const setBackgroundImageProperties = ( newImage) => {
  return {
    type: SET_BACKGROUND_IMAGE_PROPERTIES,
    payload:
      newImage,
    
  };
};