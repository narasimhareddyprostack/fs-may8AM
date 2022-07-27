import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clock from './DigitalClock/Clock'
import Contact from './Contact/Contact'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/clock" element={<Clock />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div >
        )
    }
}

export default App
