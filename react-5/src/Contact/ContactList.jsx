import React, { Component } from 'react'

class ContactList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover'>
                            <thead>
                                <tr>  <th>ID</th>
                                    <th>Name</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.contacts.map((contact, index) => {
                                        return <tr key={contact.login.uuid}>
                                            <td>{contact.login.uuid.slice(-4)}</td>
                                            <td>{contact.name.first}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2>ContactList - Example...</h2>
                <pre>{JSON.stringify(this.props.contacts)}</pre>
            </div>
        )
    }
}

export default ContactList
