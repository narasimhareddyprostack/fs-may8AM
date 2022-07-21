import React from 'react'
class Show extends React.Component {
    state = {
        type: "password",
        flag: false
    }
    changeTypeHandler = (event) => {
        event.target.checked ? this.setState({
            type: "text",

        }) :
            this.setState({
                type: "password",

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