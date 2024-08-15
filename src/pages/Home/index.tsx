import React, { useState } from "react";
import MovieList from "@src/components/MovieList";

interface Movie {
  id: string;
  title: string;
  poster: string;
  released: string;
}

const Home: React.FC = () => {
  const [movies] = useState<Movie[]>([
    {
      id: "1",
      title: "Guardians of the Galaxy Vol. 2",
      poster:
        "https://images.pexels.com/photos/13576340/pexels-photo-13576340.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      released: "2017",
    },
    {
      id: "2",
      title: "Inception",
      poster:
        "https://images.pexels.com/photos/27622349/pexels-photo-27622349/free-photo-of-white-cliffs-in-dover.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      released: "2010",
    },
  ]);

  const [watchlist, setWatchlist] = useState<string[]>([]);

  const handleAddToWatchlist = (title: string) => {
    setWatchlist((prev) => [...prev, title]);
  };

  const handleRemoveFromWatchlist = (title: string) => {
    setWatchlist((prev) => prev.filter((item) => item !== title));
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Movie Search</h1>
      <MovieList
        movies={movies}
        watchlist={watchlist}
        onAddToWatchlist={handleAddToWatchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
    </div>
  );
};

export default Home;
