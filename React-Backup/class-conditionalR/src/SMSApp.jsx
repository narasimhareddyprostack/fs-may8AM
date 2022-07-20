import React, { Component } from 'react'

class SMSApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            maxLength: 100
        }
    }
    get_Data = (event) => {
        this.setState({
            count: event.target.value.length,
            maxLength: 100 - event.target.value.length
        })

    }
    render() {
        return (
            <div>
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-5">
                            <h4>Message Component</h4>
                            <form >
                                <div className="form-group">
                                    <textarea maxLength={100} cols="40" rows="5" className="form-control" onChange={this.get_Data}></textarea>
                                </div>


                                <span>Remaining Char:{this.state.maxLength}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SMSApp
