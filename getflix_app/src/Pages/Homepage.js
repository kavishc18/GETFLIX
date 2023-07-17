import React from "react";
import CardList from "../Components/CardList";
import {submitHandler} from "../Components/quickAccessSearch.js";

function HomePage() {
  let sortedMovieDataArr = JSON.parse(localStorage.getItem("sortedMovieData"));
  let sortedMovieDataArr2 = [
    {
      titleID: "tt1016150",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
      running_time_in_minutes: 148,
      title: "All Quiet on the Western Front",
      year: 2022,
      rating: 7.8,
      genres: ["Action", "Drama", "War"],
      plot_outline:
        "A young German soldier's terrifying experiences and distress on the western front during World War I.",
    },
    {
      titleID: "tt12261776",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BYzFhM2M1MDUtNDhmNC00YzEzLThiMzctYWYxZTc0MGJhNWYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      running_time_in_minutes: 93,
      title: "65",
      year: 2023,
      rating: 5.7,
      genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
      plot_outline:
        "An astronaut crash lands on a mysterious planet only to discover he's not alone.",
    },
    {
      titleID: "tt6710474",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
      running_time_in_minutes: 139,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 7.9,
      genres: ["Action", "Adventure", "Comedy", "Fantasy", "Sci-Fi"],
      plot_outline:
        "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    },
    {
      titleID: "tt7985704",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNjcxOTJhZTEtMWFiYi00NTkwLTlkMzktZDQwMGQ0ZjM3YWU2XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      running_time_in_minutes: 114,
      title: "Operation Fortune: Ruse de guerre",
      year: 2023,
      rating: 6.4,
      genres: ["Action", "Comedy", "Thriller"],
      plot_outline:
        "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
    },
    {
      titleID: "tt1630029",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      running_time_in_minutes: 192,
      title: "Avatar: The Way of Water",
      year: 2022,
      rating: 7.8,
      genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      plot_outline:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    },
    {
      titleID: "tt10954600",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
      running_time_in_minutes: 124,
      title: "Ant-Man and the Wasp: Quantumania",
      year: 2023,
      rating: 6.4,
      genres: [
        "Action",
        "Adventure",
        "Comedy",
        "Mystery",
        "Sci-Fi",
        "Thriller",
      ],
      plot_outline:
        "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
    },
    {
      titleID: "tt1745960",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      running_time_in_minutes: 130,
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.3,
      genres: ["Action", "Drama"],
      plot_outline:
        "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    },
    {
      titleID: "tt9114286",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      running_time_in_minutes: 161,
      title: "Black Panther: Wakanda Forever",
      year: 2022,
      rating: 6.7,
      genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
      plot_outline:
        "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    },
    {
      titleID: "tt12593682",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      running_time_in_minutes: 127,
      title: "Bullet Train",
      year: 2022,
      rating: 7.3,
      genres: ["Action", "Comedy", "Thriller"],
      plot_outline:
        "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
    },
    {
      titleID: "tt1877830",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
      running_time_in_minutes: 176,
      title: "The Batman",
      year: 2022,
      rating: 7.8,
      genres: ["Action", "Crime", "Drama", "Thriller"],
      plot_outline:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
    {
      titleID: "tt15326988",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_.jpg",
      title: "Ghosted",
      year: 2023,
      genres: ["Action", "Adventure", "Comedy", "Romance"],
      plot_outline:
        "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    },
    {
      titleID: "tt10151854",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      running_time_in_minutes: 130,
      title: "Shazam! Fury of the Gods",
      year: 2023,
      rating: 6.7,
      genres: ["Action", "Adventure", "Comedy", "Crime", "Fantasy", "Thriller"],
      plot_outline:
        'The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.',
    },
    {
      titleID: "tt11291274",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
      running_time_in_minutes: 107,
      title: "The Unbearable Weight of Massive Talent",
      year: 2022,
      rating: 7,
      genres: ["Action", "Comedy", "Crime", "Thriller"],
      plot_outline:
        "In this action-packed comedy, Nicolas Cage plays Nick Cage, channeling his iconic characters as he's caught between a superfan (Pedro Pascal) and a CIA agent (Tiffany Haddish).",
    },
    {
      titleID: "tt8178634",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      running_time_in_minutes: 187,
      title: "RRR",
      year: 2022,
      rating: 7.9,
      genres: ["Action", "Adventure", "Drama"],
      plot_outline:
        "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    },
    {
      titleID: "tt2906216",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_.jpg",
      running_time_in_minutes: 134,
      title: "Dungeons & Dragons: Honor Among Thieves",
      year: 2023,
      genres: ["Action", "Adventure", "Fantasy"],
      plot_outline:
        "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    },
    {
      titleID: "tt0448115",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
      running_time_in_minutes: 132,
      title: "Shazam!",
      year: 2019,
      rating: 7,
      genres: ["Action", "Adventure", "Comedy", "Fantasy"],
      plot_outline:
        "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
    },
    {
      titleID: "tt2911666",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
      running_time_in_minutes: 101,
      title: "John Wick",
      year: 2014,
      rating: 7.4,
      genres: ["Action", "Crime", "Thriller"],
      plot_outline:
        "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
    },
    {
      titleID: "tt10366206",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
      running_time_in_minutes: 169,
      title: "John Wick: Chapter 4",
      year: 2023,
      rating: 9.2,
      genres: ["Action", "Crime", "Thriller"],
      plot_outline:
        "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    },
    {
      titleID: "tt26537229",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZDZiZTZhMzgtYTY0ZC00OGUyLWE2NzgtMmM4MjA1YjUxN2YyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      running_time_in_minutes: 110,
      title: "Demon Slayer: Kimetsu No Yaiba - To the Swordsmith Village",
      year: 2023,
      rating: 6.5,
      genres: ["Animation", "Action", "Adventure", "Fantasy", "Thriller"],
      plot_outline:
        "All the Upper Rank Demons assemble at the Infinity Castle after Upper Six Demons' defeat.",
    },
    {
      titleID: "tt0087469",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
      running_time_in_minutes: 118,
      title: "Indiana Jones and the Temple of Doom",
      year: 1984,
      rating: 7.5,
      genres: ["Action", "Adventure"],
      plot_outline:
        "In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.",
    },
  ];

  // localStorage.setItem("titleIDAr2", JSON.stringify(titleIDArr));

  const genreOptions = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-noir",
    "History",
    "Horror",
    "Musical",
    "Mystery",
    "News",
    "Romance",
    "Sci-fi",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <>
      <div
        className="background"
        style={{
          display: "flex",
        }}
      >
        <CardList card={sortedMovieDataArr || sortedMovieDataArr2} />
        <div
          className="container-quick-access"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "1em",
            paddingBottom: "6em",
            overflowX: "scroll",
            width: "27%",
            minWidth: "180px",
            maxWidth: "300px",
            textAlign: "center",
            background: "transparent",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div className="container">
              <p className="little-box-title">Quick Access</p>
              <div className="small-box">
                {genreOptions.map((genre, index) => (
                  <button
                    className="little-box"
                    key={index}
                    onClick={(e) => {
                      submitHandler(genre);
                    }}
                  >

                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default HomePage;
