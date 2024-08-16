import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "@src/components/MovieList";
import { RootState } from "@src/store";

const Home: React.FC = () => {
  const moviesData = useSelector((state: RootState) => state.search.results);
  const status = useSelector((state: RootState) => state.search.status);

  const [watchlist, setWatchlist] = useState<string[]>([]);

  const handleAddToWatchlist = (imdbID: string) => {
    setWatchlist((prev) => [...prev, imdbID]);
  };

  const handleRemoveFromWatchlist = (imdbID: string) => {
    setWatchlist((prev) => prev.filter((id) => id !== imdbID));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load movies.</p>}
      {status === "succeeded" && (
        <MovieList
          movies={moviesData ?? []}
          watchlist={watchlist}
          onAddToWatchlist={handleAddToWatchlist}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
        />
      )}
    </div>
  );
};

export default Home;
