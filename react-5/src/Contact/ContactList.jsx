import React, { Component } from 'react'

class ContactList extends Component {
    selectedContact = (contact) => {
        this.props.get_Selected_Contact(contact)
        //console.log(contact.name.first)
    }
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
                                        return <tr onMouseOver={this.selectedContact.bind(this, contact)} key={contact.login.uuid}>
                                            <td>{contact.login.uuid.slice(-4)}</td>
                                            <td><button>{contact.name.first}</button></td>
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
