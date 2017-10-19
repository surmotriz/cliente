import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import './style.css'
import AppRoutes from './routes'


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <AppRoutes />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));