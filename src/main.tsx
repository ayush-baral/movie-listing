import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

import "./index.css";
import { LayoutWithHeader } from "./components/Layout/LayoutWithHeader";
import { Provider } from "react-redux";
import { store } from "./store";
import MovieDetailPage from "./pages/MovieInfo";
import WishlistPage from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWithHeader>
        <Home />
      </LayoutWithHeader>
    ),
  },
  {
    path: "/movie/:imdbID",
    element: (
      <LayoutWithHeader>
        <MovieDetailPage />
      </LayoutWithHeader>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <LayoutWithHeader>
        <WishlistPage />
      </LayoutWithHeader>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
