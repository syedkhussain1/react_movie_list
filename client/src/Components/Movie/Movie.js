import React, { Component } from "react";
import "./Movie.css";
import Grid from "../Page_Stuff/Grid/Grid";
import Spinner from "../Page_Stuff/Spinner/Spinner";
import MovieInfo from "../Page_Stuff/MovieInfo/MovieInfo";
import ActorList from "../Page_Stuff/ActorList/ActorList";
import MovieInfoSection from "../Page_Stuff/MovieInfoSection/MovieInfoSection";
import BtnWatchList from "../Page_Stuff/BtnWatchList/BtnWatchList";
import ShowMoviePath from "../Page_Stuff/ShowMoviePath/ShowMoviePath";
import MovieList from "../MovieList/MovieList";
//import Carousel from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';

import { timeout } from "q";

/***************** CONSTANTS ***********************/
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "682698077ad9dac12b017ef2e6c87ed4";
/**************************************************/

class Movie extends Component {
  state = {
    movie: null,
    actorsData: [],
    directors: [],
    loading: false,
    description: null,
    title: null,
    imdbRating: null,
    movieImgPath: null,
    runTime: null,
    releaseDate: null,
    movieId: '',
    
  };



  // Movie path - https://api.themoviedb.org/3/movie/447404/?api_key=682698077ad9dac12b017ef2e6c87ed4
  // Credits Path - https://api.themoviedb.org/3/movie/447404/credits?api_key=682698077ad9dac12b017ef2e6c87ed4
  componentDidMount() {
    this.setState({ loading: true });
    //Fetch Movie data
    const url = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}`;
    const url_credits = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
    this.fetchMovies(url);
    this.fetchMoviesCast(url_credits);
  }

  // timeout = null;
  // clearTimeout(timeout);
  // timeout = setTimeout (() => {
  //   this.props.callback(this.state.value)
  // }, 250)

  fetchMovies = url => {
    fetch(url)
      .then(respose => respose.json())
      .then(data => {
        console.log("-------", data);
        this.setState({
          movie: data,
          loading: false,
          description: data.overview,
          title: data.original_title,
          imdbRating: data.vote_average,
          movieImgPath: data.backdrop_path,
          runTime: data.runtime,
          releaseDate: data.release_date,
          movieId: data.id
        });
      });
  };

  fetchMoviesCast = url => {
    fetch(url)
      .then(respose => respose.json())
      .then(data => {
        // console.log(data);
        const directors = data.crew.filter(person => person.job === "Director");
        const casts = data.cast;
        // console.log("directors--- ", directors);
        // console.log("Actors---- ", data.cast);
        // console.log("Link---- ", data.cast.profile_path);

        // const names = casts.map((cast) =>{
        //   console.log("Cast---- ", cast.name);
        // })
        // for (const cast of casts) {
        //   console.log("Cast---- ", cast.name);
        //   let castArray = [];
        //   castArray = cast.name;
        // }

        this.setState({
          actorsData: data.cast,
          directors: directors,
          loading: false
        });
      });
  };

  addToList = (event) => {
    console.log('Movie ID ', this.state.movieId)
    console.log('Movie Name ', this.state.title)
    const movieData = {
            movieID : this.state.movieId,
            movieName: this.state.title,
            movieWatched: false,
    };

    fetch('/api/mongodb/movielist/', {
      
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movieData),
      })
      .then(console.log('sandwich'))
      .then(response => response.json())
      .then(data => {
        console.log('Stored data to the database!!!!!!', data);
      });
  }

  render() {
    return (
      <div className="">
        <ShowMoviePath movieName={this.state.title} />
        {/* <Spinner /> */}
        <MovieInfo
          img={this.state.movieImgPath}
          movieName={this.state.title}
          description={this.state.description}
          directors={this.state.directors}
          id={this.state.movieId}
          addToList={this.addToList}
        />
        <MovieInfoSection
          runTime={this.state.runTime}
          imdb_rating={this.state.imdbRating}
          releaseDate={this.state.releaseDate}
        />

        
        <div className="movie-grid">
        {/* <Carousel
        slidesPerPage={5}
        itemWidth={200}
        arrows
        >
        {this.state.actorsData.map((actor, index) => {
          console.log("actors------", actor);
              return (
                <ActorList key={index} actorName={actor.name} 
                actorThumb={actor.profile_path} 
                character={actor.character}
                />
              );
            })} 
            </Carousel> */}

          </div> 
          
          {/* <YoutubeTrailer /> */}
      </div>
    );
  }
}

export default Movie;