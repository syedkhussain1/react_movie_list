import React from 'react'
import './BtnWatchList.css'


const BtnWatchList = (props) =>{
    return (
        
        <button className="btnwatchlist" onClick={props.onClick} text="Watch list">
            Watch List
        </button>
        
    )
}

export default BtnWatchList;