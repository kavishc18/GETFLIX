import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteFilm) => {},
  removeFavourite: (movieId) => {},
  itemIsFavourite: (movieId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMovie) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMovie);
    });
  }

  function removeFavouriteHandler(movieId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((movie) => movie.titleID !== movieId);
    });
  }

  function itemIsFavouriteHandler(movieId) {
    return userFavourites.some((movie) => movie.titleID === movieId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
