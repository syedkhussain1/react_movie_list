import React, { Component } from "react";
import HomeImage from "../Page_Stuff/HomeImage/HomeImage";
import SearchBar from "../Page_Stuff/SearchBar/SearchBar";
import Grid from "../Page_Stuff/Grid/Grid";
import MovieThumbNail from "../Page_Stuff/MovieThumbNail/MovieThumbNail";
import BtnLoadMore from "../Page_Stuff/BtnLoadMore/BtnLoadMore";
import Spinner from "../Page_Stuff/Spinner/Spinner";
import "./Home.css";

/***************** CONSTANTS ***********************/
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "682698077ad9dac12b017ef2e6c87ed4";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w500";
/***************************************************/

//Statefull class component
class Home extends Component {
  state = {
    movies: [],
    homeImage: null,
    loadingSpinner: false,
    currentPage: 0,
    totalPages: 0,
    searchStr: ""
  };

  componentDidMount() {
    //on component mounting first we show the loading spinner
    this.setState({ loadingSpinner: true });
    //using EX6 syntax 'template literal'
    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchData(url);
  }

  getMovies = (searchStr) => {
    console.log(searchStr);
    //Implementation workflow to search and other one to pull popular movies, see search bar component at the bottom
    let url = "";
    //need to clear movies array brcause when searching clear old movies show searched movies
    this.setState({
      movies: [],
      loadingSpinner: true,
      searchStr: searchStr
    });
    if (searchStr === "") {
      //if no search str set the page back to root get url
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchStr}`;
    }
    this.fetchData(url);
  };

  //Function to make the page load more movies
  loadMoreMovies = () => {
    //2 urls needed here url on search and url on just load more popular movies
    let url = "";
    this.setState({ loadingSpinner: true }); //since data is being pulled again

    if (this.state.searchStr === "") {
      //not serching just loading the page
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      //serching, search url
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
              this.state.searchStr}&page=${this.state.currentPage + 1}`;
    }
    this.fetchData(url);
  };

  //function just for fetch
  fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // for (const i of data){
        //   console.log(i)
        // }
        this.setState({
          //when loading new movie list I want to append to the log a list, so first create a copy of the old movie state
          //by using ES6 syntax, ...this.state.movies will make copy of old movie array,
          //...data.results is the new result and 'results' is coming from API check API
          movies: [...this.state.movies, ...data.results],
          //need to check if the img exists, and grabing the first movie
          homeImage: this.state.homeImage || data.results[0],
          loadingSpinner: false,
          currentPage: data.page,
          totalPages: data.total_pages
        });
      });
  };

  render() {
    return (
      <div className="home">
        {/***************** Loading Home Image Component ***********************/}
        {/* Checking if state variable is loaded using ternary operator */}
        {this.state.homeImage ? (
          //true do the below
          <div>
            <HomeImage
            //http://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.homeImage.backdrop_path}`}
              title={this.state.homeImage.title}
              text={this.state.homeImage.overview}
            />
            {/***************** Loading Search Bar Component ***********************/}
            <SearchBar callback={this.getMovies} />
          </div>
        ) : //else
        null}
        {/***************** Loading Grid Component ***********************/}
        <div className="home-grid">
          <Grid
            // display header text based on if the user is searching or popular movies
            header={this.state.searchStr ? "Search Results" : "Popular Movies"}
            loading={this.state.loadingSpinner}
          >
            {/***************** Loading MovieThumbNail Component ***********************/}
            {/* looping through the movies to get the movie thumbnail */}
            {this.state.movies.map((movie, index) => {
              return (
                <MovieThumbNail
                  key={index}
                  onClick={true}
                  // if image exists the image or no image
                  image={
                    movie.poster_path
                      ? //true do this
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                      : //else
                        "No Image Found"
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              );
            })}
          </Grid>
          {/* check if we are showing something and if we need a spinner on not */}

          {/***************** Loading Spinner Component ***********************/}
          {this.state.loadingSpinner ? <Spinner /> : null}

          {/***************** Loading BtnLoadMore Component ***********************/}
          {/* load more button is not shown on last page or when spinner is showing, this is to validate that conditon */}
          {this.state.currentPage <= this.state.totalPages &&
          !this.state.loadingSpinner ? (
            <BtnLoadMore text="Load More" onClick={this.loadMoreMovies} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
