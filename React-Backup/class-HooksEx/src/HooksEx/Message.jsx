import React, { useState } from 'react'

let Message = () => {
    let [msg, setMsg] = useState("Hello")
    let changeMessageHandler = (msg_Value) => {
        setMsg(msg_Value)
    }
    return <>
        <h1>Message Component Value:  {msg}</h1>
        <button onClick={changeMessageHandler.bind(this, "gm")}>GM</button>
        <button onClick={changeMessageHandler.bind(this, "gn")}>GN</button>
    </>
}


export default Message