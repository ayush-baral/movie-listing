import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@src/types";

interface MovieListProps {
  movies: Movie[];
  watchlist: string[];
  onAddToWatchlist: (imdbID: string) => void;
  onRemoveFromWatchlist: (imdbID: string) => void;
  onMovieCardClick: (imdbID: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onMovieCardClick,
}) => {
  if (movies.length === 0) {
    return <div className="text-sm text-gray-500">No movies found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          poster={movie.Poster}
          title={movie.Title}
          released={movie.Year}
          isInWatchlist={watchlist.includes(movie.imdbID)}
          onAddToWatchlist={() => onAddToWatchlist(movie.imdbID)}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.imdbID)}
          onMovieCardClick={() => onMovieCardClick(movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
