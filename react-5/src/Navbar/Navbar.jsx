import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  >
            <Link to="/" className="navbar-brand">Class Component Life Cycle Methods</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/clock">Clock</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    }
}

export default Navbar
