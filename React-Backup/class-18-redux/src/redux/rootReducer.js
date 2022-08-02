import { combineReducers } from 'redux'
import { messageReducer } from './Message/message.reducer'
import { counterReducer } from './Counter/counter.reducer'
let rootReducer = combineReducers({ message: messageReducer, counter: counterReducer })

export { rootReducer }