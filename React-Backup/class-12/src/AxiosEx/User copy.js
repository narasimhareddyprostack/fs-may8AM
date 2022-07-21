import Axios from 'axios'
import React from 'react'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
    }
    }
    get_Users = () => {
        console.log("test Case 123")
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch(() => { })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state)} </pre>
            <h3>User Data</h3>
            <button onClick={this.get_Users}>Get Data</button>
        </>
    }
}


export default User