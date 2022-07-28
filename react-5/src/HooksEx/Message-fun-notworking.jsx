function Message() {
    let msg = "Hello"
    let changeMsgHandler = () => {
        console.log("Test Case 123")
        msg = "Hello,GM Rahul"
        console.log(msg)
    }
    return <>
        <pre>{JSON.stringify(msg)}</pre>
        <h2>Message Component</h2>
        <button onClick={changeMsgHandler}>change Message</button>
    </>
}

export default Message