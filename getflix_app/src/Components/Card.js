import { useContext, useState } from "react";
import FavouritesContext from "../Store/favourites-context";
import UserContext from "../Store/UserContext";
import Backdrop from "./Backdrop";
import Info from "./Info";

function Card(props) {
  const [infoOpen, setInfoOpen] = useState(false);
  const favouritesCtx = useContext(FavouritesContext);
  const { user } = useContext(UserContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      if (
        window.confirm(
          "Are you sure you want to remove " +
            props.title +
            " from your favourites?"
        )
      ) {
        favouritesCtx.removeFavourite(props.id);
      }
    } else {
      favouritesCtx.addFavourite({
        titleID: props.id,
        title: props.title,
        image_url: props.image,
        rating: props.rating,
        year: props.year,
        genres: props.genres,
        running_time_in_minutes: props.running_time_in_minutes,
        plot_outline: props.plot_outline,
      });
    }
  }

  function openHandler() {
    setInfoOpen(true);
  }

  function closeInfoHandler() {
    setInfoOpen(false);
  }

  let rating = props.rating;
  if (typeof rating === "undefined") {
    rating = "N/A"
  }

  if (user.sessionId) {
    return (
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Rating: {rating}</p>
          <div className="card-info-footer">
            <button className="info-button" onClick={openHandler}>
              See more
            </button>
            <button
              onClick={toggleFavouriteStatusHandler}
              className="fav-button"
            >
              {itemIsFavourite ? "★" : "☆"}
            </button>
            {infoOpen && (
              <Info
                image={props.image}
                title={props.title}
                rating={rating}
                plot_outline={props.plot_outline}
                running_time_in_minutes={props.running_time_in_minutes}
                year={props.year}
                genres={props.genres}
              />
            )}
            {infoOpen && <Backdrop onClick={closeInfoHandler} />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Rating: {rating}</p>
        <div className="card-info-footer">
          <button className="info-button" onClick={openHandler}>
            See more
          </button>
          {infoOpen && (
            <Info
              image={props.image}
              title={props.title}
              rating={rating}
              plot_outline={props.plot_outline}
              running_time_in_minutes={props.running_time_in_minutes}
              year={props.year}
              genres={props.genres}
            />
          )}
          {infoOpen && <Backdrop onClick={closeInfoHandler} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
