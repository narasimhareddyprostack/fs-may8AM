import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employee from './Employees/Employee'
import Navbr from './Navbar/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
let App = () => {
    return <>
        <Provider store={store}>
            <Router>
                <Navbr />
                <Routes>
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </Router>
        </Provider>
    </>
}
export default App