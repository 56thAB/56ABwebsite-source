export const SET_CONTENT = "SET_CONTENT";
export const SET_CONTENT_LOADING = "SET_CONTENT_LOADING";
export const SET_CONTENT_SUCCESS = "SET_CONTENT_SUCCESS";
export const SET_CONTENT_FAIL = "SET_CONTENT_FAIL";
export const UPDATE_CHAT_INPUT_MESSAGE = "UPDATE_CHAT_INPUT_MESSAGE";
export const UPDATE_CHAT_INPUT_USERNAME = "UPDATE_CHAT_INPUT_USERNAME";

export const setContentLoading = () => {
  return {
    type: SET_CONTENT_LOADING,
  };
};

export const setContentSuccess = (link) => {
  return {
    type: SET_CONTENT_SUCCESS,
    payload: link,
  };
};

export const setContentFail = (error) => {
  return {
    type: SET_CONTENT_FAIL,
    payload: error,
  };
};

export const setContent = (link) => {
  return (dispatch) => {
    dispatch(setContentLoading());

    // Simulating async request
    
      if (link) {
        dispatch(setContentSuccess(link));
      } else {
        dispatch(setContentFail("Failed to load content."));
      }

  };
};

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
