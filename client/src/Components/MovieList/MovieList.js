import React, { Component } from "react";
import "./MovieList.css";


class MovieList extends Component {
  state = {
    watchList: [
      {
        id: 1,
        title: "Batman",
        movieWatched: false
      },
      {
        id: 2,
        title: "Superman",
        movieWatched: false
      },
      {
        id: 3,
        title: "Spiderman",
        movieWatched: false
      },
      {
        id: 4,
        title: "Avengers",
        movieWatched: false
      },
      {
        id: 5,
        title: "Superwomen",
        movieWatched: true
      },
    ]
  };

  getStyle = () => {
    console.log("I am in getStyle function ");
    this.state.watchList.map(movie => {
      return {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotter",
        textDecoration: movie.movieWatched ? "line-through" : "none"
      };
    });
  };

  onClose = ev => {
    this.props.onClose && this.props.onClose(ev);
  };

  //This will toggle using the check box
  toggleComplete = (event) => {
      console.log("I am in mark complete function")
      //TODO
      this.setState({
        watchList: this.state.watchList.map((movie) => {
            if(movie.id === 1){
                movie.movieWatched = !movie.movieWatched
            }
            return movie;
        })
      })

  }

  delMovie = (event) => {
      console.log("I am in delete function")
      this.setState({
                    //spread operator copies from watchList and then filters
          watchList: [...this.state.watchList.filter((movie) => 
                        movie.id !== movie.id)]
      })
  }

  render() {
    console.log(this.state.watchList);
    if (!this.props.display) {
      return null;
    }
    return (
      <div className="backdropstyle">
        <div className="modalstyle">
          {/* {this.props.children} */}
          <h1 style={headerStyle}>Your watch list</h1>
          
            {this.state.watchList.map(movie => {
              return (
                <h3
                  style={{
                    background: "#f4f4f4",
                    padding: "10px",
                    borderBottom: "1px #ccc dotter",
                    textDecoration: movie.movieWatched ? "line-through" : "none"
                  }}
                  // style={this.getStyle()} TODO
                  key={movie.key}
                >
                {/* How to send the id back to the function */}
                <input type="checkbox" onChange={this.toggleComplete}/>
                  {' '}
                  {movie.title}
                  <button style={btnStyle} onClick={this.delMovie}>x</button>
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
