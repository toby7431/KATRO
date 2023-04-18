import React from 'react';
import Case from './Cases';
import './style.css';

const Joueurs = () => {

    return (
        <div>

            <div className='player1'>
                <div className='ligne1'>
                    <Case />
                    <Case />
                    <Case />
                    <Case />
                </div>
                <div className='ligne1'>
                    <Case />
                    <Case />
                    <Case />
                    <Case />
                </div>
            </div>

            <div className="divisseur"></div>


            <div className='player2'>
                <div className='ligne2'>
                    <Case />
                    <Case />
                    <Case />
                    <Case />
                </div>
                <div />
                <div className='ligne2'>
                    <Case />
                    <Case />
                    <Case />
                    <Case />
                </div>
            </div>
        </div>
    )

}

export default Joueurs;