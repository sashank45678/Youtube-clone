import { configureStore } from "@reduxjs/toolkit";
import sidebarreducer from "./sidebar";
import searchReducer from "./searchSlice";
import chatSlice from "./chatSlice";
import VideoReducer from "./VideoData";
export const AppStore = configureStore({
  reducer: {
    sidebar: sidebarreducer,
    search: searchReducer,
    chat: chatSlice,
  },
});
