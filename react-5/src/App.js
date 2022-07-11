import React from 'react'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Product from './Product/Product'
import Salary from './Salary/Salary'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {/*  <Product /> */}
                <Salary />

            </div>
        )
    }
}

export default App
