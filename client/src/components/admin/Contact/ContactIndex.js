import React, {Component} from 'react';
import ContactShow from "./ContactShow";
import {Link} from "react-router-dom";
import { ContactConsumer } from '../../../providers/ContactProvider'

const ContactIndex = ({ contacts, updateContact, deleteContact, addContact, }) => (
  <ContactConsumer>
    { value => (
        <>
          { value.contacts.map(contact =>
            <ContactShow
              key={contact.id}
              {...contact}
              updateContact={value.updateContact}
              deleteContact={value.deleteContact}
            />
          )}
          <Link to="/Contact">Add new Contact</Link>
        </>
      )}
  </ContactConsumer>
)
export default ContactIndex;