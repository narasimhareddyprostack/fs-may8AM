import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Counter from './Counter/Counter'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/message" element={<Message />} />
                            <Route path="/counter" element={<Counter />} />

                        </Routes>
                    </Router>
                </Provider>
            </div >
        )
    }
}

export default App
