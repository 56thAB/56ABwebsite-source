// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import backgroundImage from "./background.png"
// Define the initial state
const initialState = {
  chat: {
    chatInputMessage: "",
    chatInputUsername: "",
  },  backgroundImage: {
    link: backgroundImage,
  },
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
