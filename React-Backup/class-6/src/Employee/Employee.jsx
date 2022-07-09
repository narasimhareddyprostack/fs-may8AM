import React, { Component } from 'react'

export class Employee extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
        )
    }
}

export default Employee
