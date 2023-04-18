import React from "react";
//import Pion from './Pions';
import './style.css';

const Case = () => {

    const Pion = () => {
        return (
            <div className="pion"></div>
        )
    }

    const changeColor = (e) => {
        //console.log(e.target)
        /*if (e.target.classList.contains('clicked')) {
            return (
                <div className="pion"></div>
            )
        } else {
            e.target.ligne1.add(<div className="pion"></div>)
        }*/
        e.target.classList.add('clicked')
    }

    return (
        <div className="rondCases" onClick={changeColor}>
            <Pion />
            <Pion />
            <Pion />
        </div>
    )
}

export default Case;