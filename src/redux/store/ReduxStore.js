import { configureStore } from "@reduxjs/toolkit";
import countersliceR from "../slices/counterslice";

const ReduxStore = configureStore({
  reducer: {
    counter: countersliceR,
  },
});

export default ReduxStore;
