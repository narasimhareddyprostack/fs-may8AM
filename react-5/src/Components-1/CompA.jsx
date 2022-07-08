import React from 'react'
import CompB from './CompB'
class CompA extends React.Component {
    name = "Rahul Gandhi"
    salary = 45000
    render() {
        return <div>
            <h2>Component A</h2>
            <hr />
            <CompB ename={this.name} esal={this.salary} />

        </div>
    }
}
export default CompA