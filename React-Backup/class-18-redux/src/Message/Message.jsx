import { gmAction, gnAction } from '../redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'

let Message = () => {
    let dispatch = useDispatch()
    let message = useSelector((state) => {
        return state.message
    })
    let gmHandler = () => {
        //dispatch action
        dispatch(gmAction())
    }
    let gnHandler = () => {
        //dispatch action
        dispatch(gnAction())
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <pre>{JSON.stringify(message)}</pre>
                <h1>Message:{message.message}</h1>
                <button onClick={gmHandler} className="btn btn-success mr-2">GM</button>
                <button onClick={gnHandler} className="btn btn-warning">GN</button>
            </div>
        </div>

    </div>
}

export default Message