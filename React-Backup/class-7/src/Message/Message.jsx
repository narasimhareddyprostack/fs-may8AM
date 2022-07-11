import React from 'react'
class Message extends React.Component {
    state = {
        msg: "Hello,"
    }
    gmHandler = () => {
        this.setState({
            msg: "Hello,GM"
        })
    }
    gnHandler = () => {
        this.setState({ msg: "Hello,GN Rahul JI" })
    }
    render() {
        console.log("Test Case 123 -render")
        return <div>
            <h1>Message Data:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message