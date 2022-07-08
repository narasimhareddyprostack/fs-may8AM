import React from 'react'

const CompD = (props) => {
    return (
        <div>
            <h1>Component D</h1>
            {/*     <pre>{JSON.stringify(props.emp)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h4><img src={props.emp.image} /></h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">{props.emp.name}</li>
                                    <li className="list-group-item">{props.emp.sal}</li>
                                    <li className="list-group-item">{props.emp.email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompD
