import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@src/types";

const initialState: Movie[] = [];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    removeMovie(state, action: PayloadAction<string>) {
      console.log("removing", action);

      const filteredData = state.filter(
        (movie) => movie.imdbID !== action.payload
      );
      console.log("🚀 ~ removeMovie ~ filteredData:", filteredData);
      state = state.filter((movie) => movie.imdbID !== action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    loadWatchlist(state) {
      const savedWatchlist = localStorage.getItem("watchlist");
      if (savedWatchlist) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state = JSON.parse(savedWatchlist);
      }
    },
  },
});

export const { addMovie, removeMovie, loadWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
