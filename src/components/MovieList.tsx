import React from "react";
import MovieCard from "./MovieCard";
import { MovieCardSkeleton } from "./Loading";
import { Movie } from "@src/types";

interface MovieListProps {
  movies: Movie[];
  watchlist: string[];
  onAddToWatchlist: (imdbID: string) => void;
  onRemoveFromWatchlist: (imdbID: string) => void;
  onMovieCardClick: (imdbID: string) => void;
  status: "loading" | "failed" | "succeeded" | "idle";
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onMovieCardClick,
  status,
}) => {
  if (status === "loading") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-500">Failed to load movies.</div>
    );
  }

  if (status === "succeeded" && movies.length === 0) {
    return <div className="text-center text-gray-500">No results found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
