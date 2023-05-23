import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = (props) => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    // se ejecuta al iniciar el componente
    const urlMovies =
      "http://localhost:3001/api/movies?pageSize=10&page=1";

    fetch(urlMovies)
      .then((response) => response.json())
      .then((data) => setMovie(data.find((movie) => movie._id === id)));
  }, []);

  console.log("movie_details");

  return (
    
    <div>
         
         <h1>HOLA</h1>
         <div>
              <img src={movie.poster} />
        </div>
            <h3>Title: {movie.title}</h3>
      
    </div>
  );
};

export default MovieDetails;