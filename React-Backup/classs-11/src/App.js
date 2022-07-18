import React from 'react'
import Navbar from './Navbar/Navbar'
import Login from './FormHandling/Login'
import Registration from './FormHandling/Registration'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Registration />
            </div>
        )
    }
}

export default App
