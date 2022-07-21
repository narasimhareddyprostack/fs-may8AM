import Navbar from './Navbar/Navbar'
import ContactApp from './Contact/ContactApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
let App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/contact" element={<ContactApp />} />
            </Routes>
        </Router>
    </>
}
export default App