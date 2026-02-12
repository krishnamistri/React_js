import React from "react";
import "./NetflixMovie.css";      
import { Link } from "react-router-dom";


export const NetflixMovies = () => {

  const movies = [
    {
      movieId: 1,
      movieName: "DoctorStrange",
      image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
      
    },
    {
      movieId: 2,
      movieName: "Avanger",
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
      movieId: 3,
      movieName: "SipderMan",
      image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
    {
      movieId: 4,
      movieName: "MarioBros",
      image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
    }
  ];

  return (
    <div className="movie_container">

      <h1 className="heading">Netflix Movies</h1>

      <div className="movie_grid">
        {movies.map((movie) => (
          <div className="movie_card" key={movie.movieId}>

            <Link to={`/watch/${movie.movieName}`}>
              <img src={movie.image} alt={movie.movieName} />
              <h3>{movie.movieName}</h3>
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
};
