import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './employee.action'

/*what is reducer?
  reducer is pure funciton take two arg ie state, action
*/
let initialState = {
    loading: true,
    users: []
}
//import action types 
let employee_Reducer = (state=initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case 'USER_REQ':
            return { ...state, }
        case 'USER_SUCCESS':
            return { ...state, users: action.payload }
        case 'USER_FAILURE':
            return { ...state }
        default:
            return state
    }
}
export { employee_Reducer }