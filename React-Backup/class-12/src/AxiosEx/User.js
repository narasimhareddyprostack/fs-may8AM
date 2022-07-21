import Axios from 'axios'
import React from 'react'
class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("First - const")
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        console.log("Third -compoentDidMount")
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({ users: response.data })
        }).catch()
    }
    render() {
        console.log("Second -render")
        return <>
            <pre>{JSON.stringify(this.state)} </pre>
            <h3>User Data</h3>
            <br />
            <table border="1">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        this.state.users.length > 0 ?
                            <>
                                {
                                    this.state.users.map((user) => {
                                        return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </> : null
                    }
                </tbody>
            </table>
        </>
    }
}


export default User