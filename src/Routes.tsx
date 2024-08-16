// Routes.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieInfo";
import WishlistPage from "./pages/Wishlist";
import { LayoutWithHeader } from "./components/Layout/LayoutWithHeader";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <LayoutWithHeader>
            <Home />
          </LayoutWithHeader>
        ),
      },
      {
        path: "movie/:imdbID",
        element: (
          <LayoutWithHeader>
            <MovieDetailPage />
          </LayoutWithHeader>
        ),
      },
      {
        path: "wishlist",
        element: (
          <LayoutWithHeader>
            <WishlistPage />
          </LayoutWithHeader>
        ),
      },
    ],
  },
]);

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes;
