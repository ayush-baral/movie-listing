import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "@src/components/MovieList";
import { AppDispatch, RootState } from "@src/store";
import { useNavigate } from "react-router-dom";
import {
  addMovie,
  loadWatchlist,
  removeMovie,
} from "@src/store/watchlistSlice";
import { Movie } from "@src/types";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const moviesData = useSelector((state: RootState) => state.search.results);
  const status = useSelector((state: RootState) => state.search.status);
  const watchlist = useSelector((state: RootState) => state.watchlist);
  console.log("🚀 ~ watchlist:", watchlist);

  useEffect(() => {
    dispatch(loadWatchlist());
  }, [dispatch]);

  const handleAddToWatchlist = (movie: Movie) => {
    dispatch(addMovie(movie));
  };

  const handleRemoveFromWatchlist = (imdbID: string) => {
    dispatch(removeMovie(imdbID));
  };

  const handleMovieCardClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <MovieList
        movies={moviesData ?? []}
        watchlist={watchlist}
        onAddToWatchlist={handleAddToWatchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
        onMovieCardClick={handleMovieCardClick}
        status={status}
      />
    </div>
  );
};

export default Home;
