import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Moises = () => (
    <div>
        <h2>Moises</h2>
    </div>
)


const BasicExample = () => (

        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/moises">Moises</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/moises" component={Moises}/>
            </div>
        </Router>
    
)
export default BasicExample