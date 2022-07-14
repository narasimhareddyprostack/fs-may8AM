import React from 'react'
import Navbar from './Navbar/Navbar'
import Login from './FormHandling/Login'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        )
    }
}

export default App
