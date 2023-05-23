import "./MoviesList.css";
import Movie from "./Movie.js";

const MoviesList = (props) => {
  // Iterar por los usuarios
  return (
    <ul className="users-list">
      {props.Movies.map((movie) =>    {
        return (
          <Movie
            Title={movie.title}
            Id={movie._id}
            Plot={movie.plot}
            Poster={movie.poster}
            Directors = {movie.directors}
            Year = {movie.year}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;