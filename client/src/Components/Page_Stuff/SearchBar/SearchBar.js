import React, { Component } from "react";
import "./SearchBar.css";
import { timeout } from "q";
import img from './icons8-search-64.png'

class SearchBar extends Component {
  state = {
    value: ""
  };

  timeout = null;

  //function to get search result
  getSearchMovies = (ev) => {
    this.setState({
        value: ev.target.value
    })
    //clear time out for search not to fire on each key stroke
    clearTimeout(this.timeout);
    //assign a new time out, will fire every half second
    this.timeout = setTimeout (() => {
        this.props.callback(this.state.value)
    }, 500); //500ms

    //when we type something we will clear timer and then the time will restart every half second
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-content">
        <img src={img}/>
          <input
            onChange={this.getSearchMovies}
            type="text"
            className="searchbar-input"
            placeholder="Search for Movies"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
