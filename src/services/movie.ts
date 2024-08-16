import { axios } from "@src/lib/axios";
import { Movie, MovieInfo } from "@src/types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

interface MovieApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const fetchMovies = async (query: string) => {
  const { data } = await axios.get<MovieApiResponse>(
    `/?apikey=${API_KEY}&s=${query}`
  );
  return data.Search ?? [];
};

export const fetchMovieDetail = async (imdbID: string) => {
  const { data } = await axios.get<MovieInfo>(
    `/?apikey=${API_KEY}&i=${imdbID}`
  );
  return data ?? {};
};
