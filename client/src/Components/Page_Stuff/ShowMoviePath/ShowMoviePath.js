import React from 'react';
import { Link } from 'react-router-dom'
import './ShowMoviePath.css'

const Navigation = (props) => {

        return ( 
            <div className="moviepath">
                <div className="moviepath-content">
                <Link to="/"><p>Home</p></Link>
                <p>/</p>
                <p>{props.movieName}</p>
                </div>
                
            </div>
         );

}
 
export default Navigation;