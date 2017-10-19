import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import './style.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <h1>dsds</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));