//what is action? action is function return actionable object
//action action types 
let GM = 'GM'
let GN = 'GN'
//create actions 
let gmAction = () => {
    console.log("gmAction - Test Case 123")
    return { type: GM }
}
let gnAction = () => {
    console.log("gNAction - Test Case 124")
    return { type: GN }
}
export { GM, GN, gmAction, gnAction } 