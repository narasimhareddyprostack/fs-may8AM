import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark">
            <Link to="/"> React Contact App Example</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-list">
                        <Link className="nav-link" to="/contact">Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar