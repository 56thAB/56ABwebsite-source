import { SET_BREADCRUMB } from "../actions";

const initialState = {
  breadcrumbs: [],
};

const breadcrumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BREADCRUMB:
      return action.payload
      
    
    default:
      return state;
  }
};

export default breadcrumbReducer;