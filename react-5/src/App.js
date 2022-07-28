import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './HooksEx/Message'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clock from './DigitalClock/Clock'
import Counter from './HooksEx/Counter'
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
                        <Route path="/message" element={<Message />} />
                        <Route path="/counter" element={<Counter />} />
                    </Routes>
                </Router>
            </div >
        )
    }
}

export default App
