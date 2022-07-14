import React from 'react'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

    }
    emailHanlder = (event) => {
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        console.log(event.target.value)
        console.log(event)
        console.log(event.target)


        this.setState({
            password: event.target.value
        })
    }
    render() {
        return <>
            <br />
            <pre>{JSON.stringify(this.state)}</pre>
            <form >
                <label >Email: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" onChange={this.emailHanlder} />  <br /><br />
                <label >Password:</label>
                <input type="text" onChange={this.passwordHandler} />
                <br /><br />
                <input type="submit" value="Login" />
            </form>
        </>
    }
}
export default Login