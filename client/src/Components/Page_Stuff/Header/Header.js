import React , { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import BtnWatchList from "../BtnWatchList/BtnWatchList"
import MovieList from "../../MovieList/MovieList"
import "./Header.css";

//Stateless component

class Header extends Component {
  state = { displayMovieList: false }

  displayMovieList = () => {
    this.setState({
      displayMovieList: !this.state.displayMovieList
    })
  }

  render() { 
    return ( 
      <div>
      <div className="header">
       <ul className="header-ul">
        <h2 className="title">AaayeMDB</h2>
        <li><a class="active" href="#home">About</a></li>
        <li><a href="#about" onClick={this.displayMovieList}>Watch List</a></li>
      </ul>
      </div>
       
         
         {/* <BtnWatchList onClick={this.displayMovieList} text="Watch List"/> */}
         <MovieList 
          onClose = {this.displayMovieList}
          display={this.state.displayMovieList}>
          <p>----------------------</p>
          <h3>1. Batman</h3>
          <p>----------------------</p>
          <h3>2. Super Man</h3>
          <p>----------------------</p>
          <h3>3. Avengers</h3>
          <p>----------------------</p>
          <p>----------------------</p>
          <h3>1. Batman</h3>
          <p>----------------------</p>
          <h3>2. Super Man</h3>
          <p>----------------------</p>
          <h3>3. Avengers</h3>
          <p>----------------------</p> 
        </MovieList>
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
