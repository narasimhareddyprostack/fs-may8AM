import React, { Component } from 'react'
class Counter extends Component {
    state = {
        counter: 1
    }
    incrHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrHandler = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div>
                <h1>Counter Value:{this.state.counter}</h1>
                <button onClick={this.decrHandler}>-</button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={this.incrHandler}>+</button>
            </div>
        )
    }
}
export default Counter
