import React, { Component } from "react";
import "./MovieList.css";


class MovieList extends Component {

//   movieID: 458156
// movieName: "John Wick:

  getStyle = () => {
    console.log("I am in getStyle function ");
    this.props.dataFromDB.map(movie => {
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
  // toggleComplete = (event) => {
  //     console.log("I am in mark complete function")
  //     //TODO
  //     this.setState({
  //       : this.props.dataFromDB.map((movie) => {
  //           if(movie.movieID === movieID){
  //               movie.movieWatched = !movie.movieWatched
  //           }
  //           return movie;
  //       })
  //     })

  // }

  delMovie = (event) => {
      console.log("I am in delete function")
      // this.setState({
      //               //spread operator copies from watchList and then filters
      //     watchList: [...this.props.dataFromDB.filter((movie) => 
      //                   movie.id !== movie.id)]
      // })
      fetch('/api/mongodb/movielist/?_id=' + '5ce74ae757f69e8b9d2d9727', {
        method: 'DELETE',
      })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('deleted from list', data);

      //   // Call method to refresh data
      //   this.fetchPosts();
      // });
  }

  render() {
    console.log(this.props.dataFromDB);
    if (!this.props.display) {
      return null;
    }
    return (
      <div className="backdropstyle">
        <div className="modalstyle">
          {/* {this.props.children} */}
          <h1 style={headerStyle}>Your watch list</h1>
          
            {this.props.dataFromDB.map(movie => {
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
                  {movie.movieName}
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
