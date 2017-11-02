import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import './assets/css/doc.css'

import AppRoutes from './routes'


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <br/><br/><br/><br/>
                    <AppRoutes />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));