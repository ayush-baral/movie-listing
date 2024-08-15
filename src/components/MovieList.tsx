import React from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
  released: string;
}

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
    return <div className='text-sm text-gray-500'>No movies found</div>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={movie.poster}
          title={movie.title}
          released={movie.released}
          isInWatchlist={watchlist.includes(movie.title)}
          onAddToWatchlist={() => onAddToWatchlist(movie.title)}
          onRemoveFromWatchlist={() => onRemoveFromWatchlist(movie.title)}
        />
      ))}
    </div>
  );
};

export default MovieList;
