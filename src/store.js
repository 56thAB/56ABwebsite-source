// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import breadcrumbReducer from "./reducers/breadcrumbReducer";
import backgroundImage from "./background.jpg";

const initialState = {
  chat: {
    chatInputMessage: "",
    chatInputUsername: "",
  },
  backgroundImage: {
    defaultImage: backgroundImage,
    newImage: backgroundImage,
  },
  breadcrumb:["/"]
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
