import Axios from 'axios'
import React, { useState, useEffect } from 'react'
let Users = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response)
            console.log(response.data)
            setUsers(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return <>
        <h1>Users Datra</h1>
        <pre>{JSON.stringify(users)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr>  <th>Id</th>
                                <th>Name</th>
                                <th>Email</th></tr>

                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? <>
                                    {
                                        users.map((user) => {
                                            return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    }
                                </> : <></>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default Users