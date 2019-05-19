import React from 'react'
import img from './icons8-timer-64.png'
import './MovieInfoSection.css'

function ConvertMinToHrMin(time){
    let hour = Math.floor(time /60);
    let min = time % 60;
    return hour + " hr " + min + " min";
}

const MovieInfoSection = (props) =>{
    return(
        <div className="movieinfosection">
            <div className="movieinfosection-content">
                <div className="threecol">
                <span className="movieinfosection-data">
                Running time: {ConvertMinToHrMin(props.runTime)}</span>
                <img className="imgtime" src={img}/>
                </div>

                <div className="threecol">
                    <p className="imdbtext">IMDB Rating</p>
                    <meter min="0" max="100" optimum="100" low="40" high="70" value={props.imdb_rating * 10}></meter>
                    <p className="ratingcount">{props.imdb_rating}</p>
                </div>
                <div className="threecol">
                <span className="movieinfosection-data">
                Release date: {props.releaseDate}</span>
                </div>
            </div>
                

            </div>
            
        
    )
}

export default MovieInfoSection;

{/* <h3>IMDB RATING</h3> 
                    <meter min="0" max="100" optimum="100" low="40" high="70" value={props.imdb_rating * 10}></meter>
                    <p className="">{props.imdb_rating}</p> */}