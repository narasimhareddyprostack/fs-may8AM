import React from 'react'
class CompB extends React.Component {
    
    render() {

        return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <hr />
            <h3>Employee Name:{this.props.ename}</h3>
            <h3>Employee Salary:{this.props.esal}</h3>

        </div >
    }
}
export default CompB