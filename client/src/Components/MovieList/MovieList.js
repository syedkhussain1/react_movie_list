import React, { Component } from "react";
import "./MovieList.css";


class MovieList extends Component {

  onClose = ev => {
    this.props.onClose && this.props.onClose(ev);
  };



  render() {
    console.log(this.props.dataFromDB);
    if (!this.props.display) {
      return null;
    }
    return (
      <div className="backdropstyle">
        <div className="modalstyle">
          
          <h1 style={headerStyle}>Your watch list</h1>
          
            {this.props.dataFromDB.map(movie => {
              console.log(movie);
              return (
                <h3
                  style={{
                    background: "#f4f4f4",
                    padding: "10px",
                    borderBottom: "1px #ccc dotter",
                    textDecoration: movie.movieWatched ? "line-through" : "none"
                  }}
                  
                  key={movie.key}
                >
                {/* How to send the id back to the function */}
                <input type="checkbox" onChange={() => this.props.toggle(movie._id)}/>
                  {' '}
                  {movie.movieName}
                  <button style={btnStyle} onClick={() => this.props.onDelete(movie._id)}>x</button>
                </h3>
              );
            })}
          <div className="footerStyle">
            <button style={btnStyle}
              onClick={ev => {
                this.onClose(ev);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default MovieList;
