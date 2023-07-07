// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

// Define the initial state
const initialState = {
  chat: {
    inputMessage: '',
  }, // Add initial state for chat reducer
  // Add initial state for other reducers here
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;