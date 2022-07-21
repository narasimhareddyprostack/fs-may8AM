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
                        <div className="col">
                            <form >
                                <h4>Message Component</h4>
                                <textarea name="" id="" cols="40" rows="5" onChange={this.get_Data}></textarea>
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
