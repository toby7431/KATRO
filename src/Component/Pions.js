import React from "react";
import './style.css';

const Pion = () => {

    const changeColor = (e) => {
        if (e.target.classList.contains('clicked')) {
            <div className="pion"></div>
        }
        e.target.classList.add('clicked')
    }

    return (
        <div className="pion" onClick={changeColor}></div>
    )
}

export default Pion;