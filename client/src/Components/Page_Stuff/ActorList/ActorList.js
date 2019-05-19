import React from "react";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w154";

const ActorList = props => {
  return (

    <div className="actor">
        <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.actorThumb}`} alt="actorthumb"/>
        <p className="actor-name">{props.actorName}</p>
        <p className="character">{props.character}</p>

    </div>
  );
};

export default ActorList;
