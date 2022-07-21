import React from 'react'
class Show extends React.Component {
    state = {
        type: "password"
    }
    changeTypeHandler = () => {
        this.setState({
            type: "text"
        })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state)}</pre>
            <form >
                <label >Password</label>
                <input type={this.state.type} />
                <br />
                <input type="checkbox" onChange={this.changeTypeHandler} /> <span>Show Password</span>
            </form>
        </>
    }
}
export default Show