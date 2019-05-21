import React from 'react'
import './BtnAddToList.css'

const BtnAddToList = (props) =>{
    return (
        <button onClick={props.addToList} className="btnaddtolist"  text="Add to watch list">
            Add to watch list
        </button>
    )
}

export default BtnAddToList;