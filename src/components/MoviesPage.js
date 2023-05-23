import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";

export default function MoviesPage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const urlMovies =
      "http://localhost:3001/api/movies?pageSize=10&page=1";

    fetch(urlMovies)
      .then((response) => response.json())
      .then((data) => setMovies(data));
      
}, []);

return (
    <div>
      <MoviesList Movies={movies} />
    </div>
  );
}