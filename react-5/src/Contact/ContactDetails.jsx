import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        return (
            <div className="container">
              {/*   <pre>{JSON.stringify(this.props.selContact)}</pre> */}
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <img src={this.props.selContact.picture.medium} alt="" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">{this.props.selContact.name.first}</li>
                                    <li className="list-group-item">{this.props.selContact.gender}</li>
                                    <li className="list-group-item">{this.props.selContact.registered.age}</li>
                                    <li className="list-group-item">{this.props.selContact.email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ContactDetails
