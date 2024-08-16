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
      const filteredData = state.filter(
        (movie) => movie.imdbID !== action.payload
      );
      state.splice(0, state.length, ...filteredData);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    loadWatchlist() {
      const savedWatchlist = localStorage.getItem("watchlist");
      if (savedWatchlist) {
        return JSON.parse(savedWatchlist);
      }
    },
  },
});

export const { addMovie, removeMovie, loadWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
