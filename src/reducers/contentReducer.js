const initialState = {
  display: null,
  link: null,
  loading: false,
  error: null,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTENT_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SET_CONTENT_SUCCESS":
      return {
        ...state,
        display: action.payload,
        link: action.payload,
        loading: false,
        error: null,
      };
    case "SET_CONTENT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;