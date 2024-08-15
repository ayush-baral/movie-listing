import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

import "./index.css";
import { LayoutWithHeader } from "./components/Layout/LayoutWithHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWithHeader>
        <Home />
      </LayoutWithHeader>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
