import React from 'react'
import './BtnAddToList.css'

const BtnAddToList = (props) =>{
    const showAlert = () => {

        alert("Movie added to list")
    }
    return (
        <button onClick={props.addToList} onClick={showAlert} className="btnaddtolist"  text="Add to watch list">
            Add to watch list
        </button>
    )
}

export default BtnAddToList;
//onClick={(event) => { func1(); func2();}}
//