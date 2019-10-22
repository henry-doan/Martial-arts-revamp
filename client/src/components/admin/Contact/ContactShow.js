import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ContactShow extends Component {
  render(){
    const { id, name, email, phone, interest, notes, updateContact, deleteContact, history } = this.props
    return (
      <div>
        <h1>Contact List</h1>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <h2>Phone: {phone}</h2>
        <button onClick = {() => deleteContact(id)}>delete</button>
        <br />
      </div>
    )
  }
}

export default ContactShow;
