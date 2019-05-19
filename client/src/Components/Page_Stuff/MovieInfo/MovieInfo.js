import React from 'react'
import BtnAddToList from "../BtnAddToList/BtnAddToList";
import './MovieInfo.css'

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w1280";

const MovieInfo = (props) => {
    return (
        <div className="movieinfo" 
            style={{background:`url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.img}')`}}
            >
                <div className="movieinfo-text">
                    <h1>{props.movieName}</h1>
                    <h3>PLOT</h3>
                    <p>{props.description}</p>
                    
                    
                    {/* if there are more than one director return prural else singular */}
                    {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
                    {props.directors.map((director, index) =>{
                        return <p>{director.name}</p>
                    })}
                    <BtnAddToList />
                </div>
                
            

        </div>
    )
}

export default MovieInfo;