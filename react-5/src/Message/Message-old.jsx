import React from 'react'
class Message extends React.Component {
    msg = "Hello,"
    gmHandler = () => {
        this.msg = "Hello,Rahul Gandhi"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        return <div>
            <h2>Message:{this.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>
        </div>
    }
}
export default Message