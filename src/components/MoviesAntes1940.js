import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "./Movie.js";
import MoviesList from "./MoviesList.js";


const MoviesAntes1940 = (props) => {
  const { id } = useParams();

  const [movies, setMovies] = useState({});

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlMovies =
      "http://localhost:3001/api/movies";

    fetch(urlMovies)
      .then((response) => response.json())
      .then((data) => setMovies (data.filter((movie) => parseInt(movie.year) < 1930)));
  }, []);


  return (
    <MoviesList Movies={movies} />
  );
};

export default MoviesAntes1940;