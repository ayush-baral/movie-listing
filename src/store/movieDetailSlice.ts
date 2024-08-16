import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "@src/services/movie";
import { MovieInfo } from "@src/types";

interface MovieDetailState {
  movie: MovieInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  loading: false,
  error: null,
};

export const fetchMovieDetails = createAsyncThunk<
  MovieInfo,
  string,
  { rejectValue: string }
>("movieDetail/fetchMovieDetails", async (imdbID, { rejectWithValue }) => {
  try {
    const movies = await fetchMovieDetail(imdbID);
    return movies;
  } catch (error) {
    console.log("🚀 ~ > ~ error:", error);
    return rejectWithValue("Failed to fetch movie details");
  }
});

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default movieDetailSlice.reducer;
