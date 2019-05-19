import React, { Component } from "react";
import YouTube from "react-youtube";

const API_URL = "https://www.googleapis.com/youtube/v3/";
const YOU_API_KEY = "AIzaSyAHYX4OdiMn3svtded4wmpi0bI-oJQos7s";

class Trailer extends Component {
  state = {};
  render() {
    return (
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Trailer;
