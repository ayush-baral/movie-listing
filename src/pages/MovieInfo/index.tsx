import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import { MovieDetailSkeleton } from "@src/components/Loading";
import { RootState, AppDispatch } from "@src/store";
import { fetchMovieDetails } from "@src/store/movieDetailSlice";
import { addMovie, removeMovie } from "@src/store/watchlistSlice";

const MovieDetailPage = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { movie, loading, error } = useSelector(
    (state: RootState) => state.movieDetail
  );
  const watchlist = useSelector((state: RootState) => state.watchlist);

  const isInWishlist = watchlist.some((item) => item.imdbID === imdbID);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieDetails(imdbID));
    }
  }, [imdbID, dispatch]);

  const handleAddToWishlist = () => {
    if (!imdbID) return;

    if (isInWishlist) {
      dispatch(removeMovie(imdbID));
    } else {
      if (movie) {
        const movieData = {
          imdbID: movie.imdbID,
          Poster: movie.Poster,
          Title: movie.Title,
          Type: movie.Title,
          Year: movie.Year,
        };
        dispatch(addMovie(movieData));
      }
    }
  };

  if (loading) {
    return <MovieDetailSkeleton />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="text-center text-gray-500">No movie data found</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4 flex items-center"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft size={24} className="mr-2" />
        Back
      </button>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto object-cover rounded-t-lg"
          style={{ height: "500px" }} // Adjust the height as needed
        />
        <button
          className={`absolute top-4 right-4 z-10 ${
            isInWishlist ? "text-red-700" : "text-red-500"
          } hover:text-red-700`}
          onClick={handleAddToWishlist}
        >
          {isInWishlist ? (
            <AiFillHeart size={32} />
          ) : (
            <AiOutlineHeart size={32} />
          )}
        </button>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">
            {movie.Title} ({movie.Year})
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Released:</strong> {movie.Released}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
