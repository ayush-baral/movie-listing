import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import { removeMovie, clearWatchlist } from "@src/store/watchlistSlice";
import MovieCard from "@src/components/MovieCard";
import { useNavigate } from "react-router-dom";

const WishlistPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const watchlist = useSelector((state: RootState) => state.watchlist);

  const handleRemoveFromWishlist = (imdbID: string) => {
    dispatch(removeMovie(imdbID));
  };

  const handleClearWishlist = () => {
    dispatch(clearWatchlist());
  };

  const handleMovieCardClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Watchlist</h1>
        {watchlist.length > 0 && (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
            onClick={handleClearWishlist}
          >
            Clear Watchlist
          </button>
        )}
      </div>
      {watchlist.length === 0 ? (
        <p className="text-center text-gray-500">Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              released={movie.Year}
              isInWatchlist={true}
              onAddToWatchlist={() => {}}
              onRemoveFromWatchlist={() =>
                handleRemoveFromWishlist(movie.imdbID)
              }
              onMovieCardClick={() => handleMovieCardClick(movie.imdbID)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
