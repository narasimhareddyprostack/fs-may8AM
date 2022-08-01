//what is reducer
//what is pure function

let initialState = {
    message: "Hello,MR Rahul Gandhi"
}
let messageReducer = (state = initialState, action) => {
    console.log(action , "message Reducer")
    console.log(action.type, "message Reducer")
    switch (action.type) {
        case 'GM':
            return { message: "GM MR Rahul" }
        case 'GN':
            return { message: 'GN MR Rahul' }
        default:
            return state
    }
}
export { messageReducer }