// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import backgroundImage from "./background.png";

const initialState = {
  chat: {
    chatInputMessage: "",
    chatInputUsername: "",
  },
  backgroundImage: {
    defaultImage: backgroundImage,
    newImage: backgroundImage,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
