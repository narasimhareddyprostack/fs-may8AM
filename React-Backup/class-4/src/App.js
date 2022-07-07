import React from 'react'
import CompA from './UI/CompA'
import Navbar from './Components/Navbar/Navbar'
import './assets/css/rajni.css'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h1>App Class Component</h1>
            <hr />
            <CompA />
        </div>
    }
}
export default App