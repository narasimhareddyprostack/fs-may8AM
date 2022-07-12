import React from 'react'
import employees from './empData'
class Data extends React.Component {
    constructor(props) {
        super(props)
        console.log("GM - constructor")
        this.state = {
            employees: employees
        }
    }
    componentDidMount() {
        console.log("Deep Sleep - ")
    }
    render() {
        console.log("GN -render Method")
        return <React.Fragment>
            <pre>{JSON.stringify(this.state.employees)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map((emp,index) => {
                                        return <tr key={index}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email.toLocaleUpperCase()}</td>
                                            <td>{emp.gender.toLocaleUpperCase()}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default Data