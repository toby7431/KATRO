import { Component } from 'react';
import Katro from './Component/Katro';
import './App.css';

class App extends Component {

    state = {
        titre: 'Katro Lalao Gasy'
    }

    render() {
        return (
            <div className="App">
                <Katro title={this.state.titre} />
            </div>
        );
    }
}

export default App;