//import { useState } from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

const Movie = (props) => {
  
 

 

  return (
    
    <li className="user-item">
      
      <div className="card user-item__content">
      <Link to={`/movies/${props.Id}`}>
        <div>
              <img src={props.Poster} />
        </div>
        </Link>
        <div className="user-item__info">
          <h2>Título: {props.Title}</h2>
          <h2>Plot: {props.Plot}</h2>
          <h2>Año: {props.Year}</h2>
          <div className="user-item__info">
          <h2>Directores: {props.Directors?.map((dir) => {
            return (
              <h4>{dir}</h4>
            )
          })
        }</h2>
        </div>
        </div>
      </div>
    </li>
     
  );
};

export default Movie;