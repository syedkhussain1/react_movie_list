import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumbNail.css";

const MovieThumbNail = props => {
  return (
    <div className="moviethumb">
      {props.onClick ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`
          }}
        >
          <img src={props.image} alt="movieThumbNail" />
        </Link>
      ) : (
        <img src={props.image} alt="movieThumbNail" />
      )}
    </div>
  );
};

export default MovieThumbNail;
