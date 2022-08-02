import React from 'react'
//import actions 
import { incrAction, decrAction } from '../redux/Counter/counter.action'

import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    let counter = useSelector((state) => {
        return state.counter
    })
    let dispatch = useDispatch()
    let incrHandler = () => {
        //dispatch action action 
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return (
        <div>
            <h1>Counter</h1>
            <pre>{JSON.stringify(counter)}</pre>
            <h2>Counter Value: {counter.qty} </h2>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={decrHandler}> -</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={incrHandler}> +</button>
        </div>
    )
}

export default Counter
