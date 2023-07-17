import React from "react";

function Info(props) {
  let genres = props.genres;
  let genrelist = "";
  genres.forEach((element) => {
    if (typeof element.nextSibling === "undefined") {
      genrelist += element + ", ";
    } else {
      genrelist += element;
    }
  });
  genrelist = genrelist.replace(/,\s*$/, "");

  let rating = props.rating;
  if (rating === "N/A") {
    rating = "N/A"
  }
  else {
    rating = "" + rating + "/10 (IMDb)";
  }

  let running_time_in_minutes = (props.running_time_in_minutes);
  if(typeof running_time_in_minutes === "undefined") {
    running_time_in_minutes = "Not available";
  }
  else {
    running_time_in_minutes = "" + running_time_in_minutes + " minutes"
  }

  return (
    <div className="info-page-div">
      <div className="info-box">
        <div className="info-image-div">
          <img src={props.image} className="info-image" alt={props.title} />
        </div>
        <div className="info-text-div">
          <div className="info-title-div">
            <div className="info-title">{props.title}</div>
          </div>
          <div className="info-body-div">
            <div className="info-description-div">
              <div className="info-header">DESCRIPTION:</div>
              <div>{props.plot_outline}</div>
            </div>
            <div className="info-genres-div">
              <div className="info-header">Genres:</div>
              <div className="info-genres">{genrelist}</div>
            </div>
            <div className="info-rating-div">
              <div className="info-header">Rating:</div>
              <div>{rating}</div>
            </div>
            <div className="info-extra-div">
              <div className="info-header">Year:</div>
              <div>{props.year}</div>
              <div className="info-header">Runtime:</div>
              <div>{running_time_in_minutes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
