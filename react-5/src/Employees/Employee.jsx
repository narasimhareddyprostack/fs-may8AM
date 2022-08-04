import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_User_Action } from '../redux/Employee/employee.action'
const Employee = () => {
    let dispatch = useDispatch();
    let employees = useSelector((state) => {
        return state.employee
    })
    useEffect(() => {
        dispatch(get_User_Action())
    }, []);
    return (
        <div>
            <pre>{JSON.stringify(employees)}</pre>
            <h1>Employee Component</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.users.length > 0 ? <>
                                        {
                                            employees.users.map((emp) => {
                                                return <tr>
                                                    <td>{emp.id}</td>
                                                    <td>{emp.name}</td>
                                                    <td>{emp.email}</td>
                                                </tr>
                                            })
                                        }
                                    </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
