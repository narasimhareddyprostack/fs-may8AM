let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home" className="navbar-brand">Routing Example</a>
        <div className="ml-auto">
            <ul className="navbar-nav ">
                <li className="nav-list"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-list"><a className="nav-link" href="/service">Service</a></li>
                <li className="nav-list"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>

        </div>

    </nav >
}
export default Navbar