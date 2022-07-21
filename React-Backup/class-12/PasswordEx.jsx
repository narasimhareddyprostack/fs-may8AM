import React, { Component } from 'react'

class PasswordEx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: true,
            type_Value: "password"
        }
    }
    changeType = (event) => {
        this.setState({
            isChecked: event.target.checked,
            type_Value: "text"
        })
    }

    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <form >
                        <div className="form-group">
                            <input type={this.state.type_Value} placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group-check">
                            <input onChange={this.changeType} type="checkbox" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default PasswordEx
