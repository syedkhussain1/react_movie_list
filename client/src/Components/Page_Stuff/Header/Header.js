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
          dataFromDB={this.state.movieDataFromDB}>
          
        </MovieList>
       </div>
     </div>

     

     </div>
     

     );
  }
}
 
export default Header;

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-content">
//         <h1 className="title">AyeMDB</h1>
//         <BtnWatchList text="Watch List"/>
//       </div>
//     </div>
//   );
// };

// export default Header;
