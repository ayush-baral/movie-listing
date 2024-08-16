import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import Routes from "./Routes";
import { loadWatchlist } from "./store/watchlistSlice";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWatchlist());
  }, [dispatch]);

  return <Routes />;
};

export default App;
