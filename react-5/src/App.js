import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/message" element={<Message />} />

                    </Routes>
                </Router>
            </div >
        )
    }
}

export default App
