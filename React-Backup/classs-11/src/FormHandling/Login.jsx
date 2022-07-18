import React from 'react'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    emailHandler = (event) => {
        console.log(event.target.value)
        console.log(event)
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        console.log(event.target.value)
        console.log(event)
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <br /><br />
            <form >
                <label >Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" onChange={this.emailHandler} /> <br />
                <label >Password</label>
                <input type="text" onChange={this.passwordHandler} />  <br />
                <input type="Submit" value="Login..." />
            </form>
        </div>
    }
}
export default Login