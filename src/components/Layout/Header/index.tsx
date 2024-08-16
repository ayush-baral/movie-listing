import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import { useEffect } from "react";
import { searchMovies, setQuery } from "@src/store/searchSlice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { query } = useSelector((state: RootState) => state.search);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
  };

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query));
    }
  }, [query, dispatch]);

  return (
    <div className="bg-gray-100 w-full p-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="text-blue-500 hover:text-blue-700 transition duration-200"
        >
          Watchlist
        </Link>
      </div>
      <div className="flex-grow flex justify-center">
        <input
          placeholder="Enter Movie Title"
          type="text"
          className="outline-none py-2 px-4 rounded-md w-full max-w-md text-sm bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          value={query}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
