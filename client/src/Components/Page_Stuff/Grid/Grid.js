import React from "react";
import "./Grid.css";

const Grid = (props) => {
    //method to render movie thumb nails
    const renderElements = () => {
        //Looping through each child and creating the element on the page, in this case the movie image thumbnail
        const gridElements = props.children.map((movie, index) => {
            return (
                <div key={index} className="grid-element">
                    {movie}
                </div>
            )  
        })
        return gridElements;
    }

  return (
    <div className="grid">
      {/* If props.header and no loader */}
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="grid-content">
        {/* method to render movie thumb nails */}
        {renderElements()}
      </div>
    </div>
  );
};

export default Grid;
