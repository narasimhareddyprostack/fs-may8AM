import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    let incrHandler = () => {
        setCounter(counter + 1)
    }
    let decrHandler = () => {

        setCounter(counter - 1)
    }
    return (
        <div>
            <h3>Counter Value:{counter}</h3>
            <h4>Counter Example</h4>
            <button onClick={incrHandler}>Plus</button>
            <button onClick={decrHandler}>Minus</button>

        </div>
    )
}

export default Counter
