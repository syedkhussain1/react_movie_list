import React from "react";
import "./HomeImage.css";

const HomeImage = props => {
  return (
    <div
      className="homeimage"
      style={{ background: `url('${props.image}'), #1c1c1c` }}
    >
      <div className="homeimage-content">
        <div className="homeimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
