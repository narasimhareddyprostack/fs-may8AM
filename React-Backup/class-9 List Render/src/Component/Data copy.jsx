import React from 'react'
class Data extends React.Component {
    constructor(props) {
        super(props)
        console.log("GM - constructor")

    }
    componentDidMount() {
        console.log("Deep Sleep - ")
    }
    render() {
        console.log("GN -render Method")
        return <React.Fragment>

        </React.Fragment>
    }
}
export default Data