import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbr from './Navbar/Navbar'
import Users from './Users/Users'
let App = () => {

    return <>
        <Router>
            <Navbr />
            <Routes>
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>

    </>
}
export default App