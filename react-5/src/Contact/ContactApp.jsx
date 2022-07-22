import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
class ContactApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            selected_Contact: {}
        }
    }
    get_Selected_Contact = (contact) => {
        console.log("Contact App ", contact.name.first)
        this.setState({ selected_Contact: contact })
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({
                    contacts: response.data
                })
            }).catch()
    }
    render() {
        return <div className="container mt-5">
            {/*  <pre>{JSON.stringify(this.state)}</pre>
            <hr />
            <pre>{JSON.stringify(this.state.selected_Contact)}</pre> */}

            <div className="row">
                <div className="col-md-8 ">
                    <ContactList contacts={this.state.contacts} get_Selected_Contact={this.get_Selected_Contact} />
                </div>
                <div className="col-md-4 bg-light">
                    {

                        Object.keys(this.state.selected_Contact).length > 0 ? <>
                            <ContactDetails selContact={this.state.selected_Contact} />
                        </> : null
                    }
                </div>
            </div>
        </div>
    }
}
export default ContactApp