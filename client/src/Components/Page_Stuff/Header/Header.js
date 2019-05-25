import React , { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import BtnWatchList from "../BtnWatchList/BtnWatchList"
import MovieList from "../../MovieList/MovieList"
import "./Header.css";

//Stateless component

class Header extends Component {
  state = { 
          movieDataFromDB:[],
           displayMovieList: false 
          }

  displayMovieList = () => {
      console.log('Fetching data from API');
      fetch('/api/mongodb/movielist/')
        .then(response => response.json())
        .then(data => {
          console.log('Got data back', data);
          this.setState({
            displayMovieList: !this.state.displayMovieList,
            movieDataFromDB: data

          });
        });
      }
    
      
  updateMovieList = () => {
    console.log('Fetching data from API');
    fetch('/api/mongodb/movielist/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        this.setState({
          movieDataFromDB: data

        });
      });
    }
  

  delMovie = (movieId) => {
    console.log("I am in delete function")

    fetch('/api/mongodb/movielist/?_id=' + movieId, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('deleted from list', data);

      // Call method to refresh data
      this.updateMovieList();
    });
  }

    //This will toggle using the check box
  toggleComplete = (movieId) => {
      console.log("I am in mark complete function")
      //TODO
      const movieSeen  = {
        movieWatched: true,
      };

      fetch('/api/mongodb/movielist/?_id=' + movieId, {
      
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movieSeen),
      })
      .then(console.log('sandwich'))
      .then(response => response.json())
      .then(data => {
        console.log('Stored data to the database!!!!!!', data);

      // Call method to refresh data
      this.updateMovieList();
      });
      

  }
  

  render() { 
    return ( 
      <div>
      <div className="header">
       <div className="header-content">
       <BrowserRouter>
          <Link to="/">
            <h1 className="title">AaayeMDB</h1>
            </Link>
       </BrowserRouter>
       
         
         <BtnWatchList onClick={this.displayMovieList} text="Watch List"/>
         <MovieList 
          onClose = {this.displayMovieList}
          display={this.state.displayMovieList}
          dataFromDB={this.state.movieDataFromDB}
          onDelete={this.delMovie}
          toggle={this.toggleComplete}>
          
        </MovieList>
       </div>
     </div>

     

     </div>
     

     );
  }
}
 
export default Header;


