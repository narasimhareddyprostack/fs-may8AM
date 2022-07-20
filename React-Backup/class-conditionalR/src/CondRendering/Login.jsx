import React from 'react'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }
    updateButton = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
    render() {
        return <>

            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">

                                {
                                    this.state.isLogin ? <button onClick={this.updateButton} className="btn btn-success mx-2">Login</button> : <button onClick={this.updateButton} className='btn btn-warning'>Logout</button>

                                }


                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}


export default Login