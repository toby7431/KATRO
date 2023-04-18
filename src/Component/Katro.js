import React, { Component } from 'react';
import Joueurs from "./Players";

class Katro extends Component {

    render() {

        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <Joueurs />
            </div>
        )
    }
}

export default Katro;