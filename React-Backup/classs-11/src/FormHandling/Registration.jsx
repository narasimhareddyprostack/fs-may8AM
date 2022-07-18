import React, { Component } from 'react'
class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ename: "",
            epassword: "",
            emobile: ""

        }
    }
    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHanlder = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.submitHanlder}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name="ename" onChange={this.formHandler} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Password" name="epassword" onChange={this.formHandler} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile" name="emobile" onChange={this.formHandler} />
                            </div>
                            <div>
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Registration
