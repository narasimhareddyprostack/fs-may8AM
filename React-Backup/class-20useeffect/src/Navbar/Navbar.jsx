import { Link } from 'react-router-dom'
let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Redux Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"> <Link className="nav-link" to="/users">Users</Link></li>

            </ul>
        </div>
    </nav>
}
export default Navbar