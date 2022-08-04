import Axios from 'axios'

//action types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'
//actions
let user_Request_Action = () => {
    return { type: USER_REQ }
}
let user_Success_Action = (users) => {
    return { type: USER_SUCCESS, payload: users }
}
let user_Failure_Action = () => {
    return { type: USER_FAILURE }
}
let get_User_Action = () => {
    return (dispatch) => {
        dispatch(user_Request_Action())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(user_Success_Action(response.data))
            })
            .catch(() => {
                dispatch(user_Failure_Action())
            })
    }
}

export { get_User_Action, USER_REQ, USER_SUCCESS, USER_FAILURE }