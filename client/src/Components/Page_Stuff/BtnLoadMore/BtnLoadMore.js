import React from 'react';
import './BtnLoadMore.css'

const BtnLoadMore = (props) =>{
    return (
        <div className="btnloadmore" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default BtnLoadMore;