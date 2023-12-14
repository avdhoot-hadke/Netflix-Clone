import { configureStore } from "@reduxjs/toolkit";
import { netflixSlice } from "./features";

export default configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});
