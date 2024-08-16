import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@src/types";

interface WatchlistState {
  watchlist: Movie[];
}

const initialState: WatchlistState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.watchlist.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },
    removeMovie(state, action: PayloadAction<string>) {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload
      );
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },
    loadWatchlist(state) {
      const savedWatchlist = localStorage.getItem("watchlist");
      if (savedWatchlist) {
        state.watchlist = JSON.parse(savedWatchlist);
      }
    },
  },
});

export const { addMovie, removeMovie, loadWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
