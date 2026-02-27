import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Lore from "./pages/Lore";
import About from "./pages/About";

import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "product/:id", element: <ProductDetail /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "lore", element: <Lore /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  {
    // ✅ GitHub Pages mount path support (/the-devils-hand/)
    basename: import.meta.env.BASE_URL,
  },
);
