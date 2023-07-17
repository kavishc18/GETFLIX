import Card from "./Card";

function CardList(props) {
  return (
    <div className="cardContainer">
      {props.card.map((card) => (
        <Card
          id={card.titleID}
          image={card.image_url}
          title={card.title}
          rating={card.rating}
          year={card.year}
          genres={card.genres}
          running_time_in_minutes={card.running_time_in_minutes}
          plot_outline={card.plot_outline}
        />
      ))}
    </div>
  );
}

export default CardList;
