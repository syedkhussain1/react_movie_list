import React, { Component } from 'react'
import "./MovieList.css"

class MovieList extends Component {
    state = {  }

    onClose = (ev) => {
        this.props.onClose && this.props.onClose(ev)
    }

    render() { 
        if (!this.props.display){
            return null;
        }
        return ( 
            <div className="backdropstyle">
            <div className="modalstyle">
                {this.props.children}
                <div className="footerStyle">
                    <button onClick ={(ev) => {this.onClose(ev)}}>
                        X
                    </button> 
                </div>
                </div>
            </div>
         );
    }
}
 
export default MovieList;