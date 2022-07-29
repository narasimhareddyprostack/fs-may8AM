import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props)
        console.log("First constructor method")
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        console.log("Third - class compnent Life Cycle method - Birth")
        setInterval(() => {
            this.setState({ ct: new Date().toLocaleTimeString() })
        }, 1000)
    }
    componentWillUpdate() {
        console.log("middle")
    }
    componentWillUnmount() {
        console.log("Final - UnMounting")
    }
    render() {
        console.log(" Second - Render Method")
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Digital Clock</h4>
                        </div>
                        <div className="card-body">
                            <p>{this.state.ct}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Clock
