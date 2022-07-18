import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                </Router>   
            </div>
        )
    }
}

export default App
