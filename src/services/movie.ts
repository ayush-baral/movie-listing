import { Movie } from "@src/types";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

interface MovieApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const fetchMovies = async (query: string) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );
  const data: MovieApiResponse = await response.json();
  return data?.Search ?? [];
};
