import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import movieDetailSlice from "./movieDetailSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    movieDetail: movieDetailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
