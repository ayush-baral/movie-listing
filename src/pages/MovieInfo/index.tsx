import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import { fetchMovieDetails } from "@src/store/movieDetailSlice";

const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { movie, loading, error } = useSelector(
    (state: RootState) => state.movieDetail
  );

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieDetails(imdbID));
    }
  }, [imdbID, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie data found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        {movie.Title} ({movie.Year})
      </h1>
      <div className="flex">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-48 h-auto mr-4"
        />
        <div>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>
          <p>
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <p>
            <strong>Metascore:</strong> {movie.Metascore}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating} ({movie.imdbVotes}{" "}
            votes)
          </p>
          <p>
            <strong>BoxOffice:</strong> {movie.BoxOffice}
          </p>
          <p>
            <strong>Production:</strong> {movie.Production}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={movie.Website} target="_blank" rel="noopener noreferrer">
              {movie.Website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
