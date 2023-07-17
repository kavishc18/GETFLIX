import { useContext } from "react";
import FavouritesContext from "../Store/favourites-context";
import CardList from "../Components/CardList";

function FavoritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = (
      <p
        style={{
          fontSize: "3em",
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
        }}
      >
        No favourited movies yet.
      </p>
    );
  } else {
    content = <CardList card={favouritesCtx.favourites} />;
  }

  return (
    <div
      className="background"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="fav-title-div">
        <h1 className="fav-title">My Favourites</h1>
      </div>
      {content};
    </div>
  );
}

export default FavoritesPage;
