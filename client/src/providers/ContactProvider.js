import React, { Component } from 'react';
import axios from 'axios';

const ContactContext = React.createContext();

export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends Component {
  state = { contacts: [],
  }

  componentDidMount() {
    axios.get('/api/contacts')
      .then( res => {
        this.setState({ contacts: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addContact = (incommingContact) => {
    const contact = incommingContact
    axios.post('/api/contacts', { contact })
      .then( res => {
        const { contacts } = this.state
        this.setState({ contacts: [ ...contacts, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateContact = (id, contact) => {
    axios.put(`/api/contacts/${id}`, { contact })
      .then( res => {
        const contacts = this.state.contacts.map( t => {
          if (t.id === id)
            return res.data
          return t
        })
        this.setState({ contacts })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteContact = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then( res => {
        const { contacts } = this.state
        this.setState({ contacts: contacts.filter( t => t.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <ContactContext.Provider value={{
        ...this.state,
        addContact: this.addContact,
        updateContact: this.updateAbout,
        deleteContact: this.deleteContact
      }}>
        { this.props.children }  
      </ContactContext.Provider>
    )
  }
}

export default ContactProvider;