//what is reducer ?
//reducer is pure function, take two arguments, ie state, action
import { INCR, DECR } from './counter.action'
let initialState = {
    qty: 1
}
let counterReducer = (state = initialState, action) => {
    console.log(action.type, "Counter Reducer file")
    switch (action.type) {
        case 'INCR':
            return { qty: state.qty + 1 }
        case 'DECR':
            return { qty: state.qty - 1 }
        default:
            return state
    }
}
export { counterReducer }