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
    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
                <input type="text" onChange={this.formHandler} name="name" /> <br /><br />
                <label >Email:</label>
                <input type="text" onChange={this.formHandler} name="email" /> <br /><br />
                <label >Password:</label>
                <input type="text" onChange={this.formHandler} name="password" /> <br /><br />
                <input type="submit" value="Registraion" />
            </form>
        </>
    }
}
export default Registration