
export const UPDATE_CHAT_INPUT_MESSAGE = "UPDATE_CHAT_INPUT_MESSAGE";
export const UPDATE_CHAT_INPUT_USERNAME = "UPDATE_CHAT_INPUT_USERNAME";
export const SET_BACKGROUND_IMAGE_LINK = "SET_BACKGROUND_IMAGE_LINK";



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
export const setBackgroundImageLink = (link) => {
  return {
    type: SET_BACKGROUND_IMAGE_LINK,
    payload: link,
  };
};