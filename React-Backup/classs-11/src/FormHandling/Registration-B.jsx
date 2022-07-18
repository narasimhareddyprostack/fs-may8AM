import React from 'react'
class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitHandler = (event) => {
        console.log(this.state)
        event.preventDefault()
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label >Name:</label>
                <input type="text" onChange={this.nameHandler} /> <br /><br />
                <label >Email:</label>
                <input type="text" onChange={this.emailHandler} /> <br /><br />
                <label >Password:</label>
                <input type="text" onChange={this.passwordHandler} /> <br /><br />
                <input type="submit" value="Registraion" />
            </form>
        </>
    }
}
export default Registration