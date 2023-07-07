export const SET_CONTENT = "SET_CONTENT";
export const SET_CONTENT_LOADING = "SET_CONTENT_LOADING";
export const SET_CONTENT_SUCCESS = "SET_CONTENT_SUCCESS";
export const SET_CONTENT_FAIL = "SET_CONTENT_FAIL";
export const UPDATE_INPUT_MESSAGE = "UPDATE_INPUT_MESSAGE";

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