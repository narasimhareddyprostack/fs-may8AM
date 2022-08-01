//how to  create store 
//what is store
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import { messageReducer } from './Message/message.reducer'

let store = createStore(rootReducer, composeWithDevTools());
//let store = createStore(rootReducer)
export { store }