import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
// Import other reducers if needed

// Define the initial state
const initialState = {
  dbLink: null,
  // Add initial state for other reducers here
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
