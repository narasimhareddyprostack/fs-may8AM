import React from 'react'

class Message extends React.Component {
    state = {
        msg: "Hello"
    }
    changeMessageHandler = () => {
        this.setState({ msg: "Hello,RG. GM" })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state)}</pre>
            <h4>Message:{this.state.msg}</h4>
            <h1>Message Component</h1>
            <button onClick={this.changeMessageHandler}>Change Message</button>
        </>
    }
}
export default Message