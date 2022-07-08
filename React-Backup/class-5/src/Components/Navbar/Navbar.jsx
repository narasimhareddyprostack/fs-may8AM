import React from 'react'
class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="navbar-brand">React Component Example</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-list"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="#">About</a></li>
                <li className="nav-list"><a className="nav-link" href="#">Contact</a></li>

            </ul>
        </nav>
    }
}
export default Navbar