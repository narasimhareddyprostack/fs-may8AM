import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import CompA from './PropsDrill/CompA'
import User from './Person/User'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <User />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default App
