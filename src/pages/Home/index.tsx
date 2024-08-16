import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "@src/components/MovieList";
import { AppDispatch, RootState } from "@src/store";
import { useNavigate } from "react-router-dom";
import { addMovie, removeMovie } from "@src/store/watchlistSlice";
import { Movie } from "@src/types";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const moviesData = useSelector((state: RootState) => state.search.results);
  const status = useSelector((state: RootState) => state.search.status);
  const watchlist = useSelector((state: RootState) => state.watchlist);
  const query = useSelector((state: RootState) => state.search.query);

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

      {query.length < 3 ? (
        <div className="text-center text-gray-500">
          <p>Please enter at least 3 characters to search for movies.</p>
        </div>
      ) : (
        <MovieList
          movies={moviesData ?? []}
          watchlist={watchlist}
          onAddToWatchlist={handleAddToWatchlist}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
          onMovieCardClick={handleMovieCardClick}
          status={status}
        />
      )}
    </div>
  );
};

export default Home;
