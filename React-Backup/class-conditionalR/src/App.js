import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './CondRendering/Login'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Services'
import Contact from './components/Contact'
import SMSApp from './SMSApp'
import PasswordEx from './PasswordEx'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/password" element={<PasswordEx />} />
                        <Route path="/sms" element={<SMSApp />} />
                        <Route path="/condition" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
