import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./Store/favourites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
