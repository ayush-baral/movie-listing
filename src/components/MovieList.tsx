import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@src/types";

interface MovieListProps {
  movies: Movie[];
  watchlist: string[];
  onAddToWatchlist: (title: string) => void;
  onRemoveFromWatchlist: (title: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
}) => {
  if (movies.length === 0) {
    return <div className="text-sm text-gray-500">No movies found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.Title}
          poster={movie.Poster}
          title={movie.Title}
          released={movie.Year}
          isInWatchlist={watchlist.includes(movie.Title)}
          onAddToWatchlist={() => onAddToWatchlist(movie.Title)}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.Title)}
        />
      ))}
    </div>
  );
};

export default MovieList;
