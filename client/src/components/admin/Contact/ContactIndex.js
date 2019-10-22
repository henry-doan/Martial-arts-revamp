import React, {Component} from 'react';
import ContactShow from "./ContactShow";
import { ContactConsumer } from '../../../providers/ContactProvider';
import {Link} from 'react-router-dom';

const ContactIndex = ({contacts, updateContact, deleteContact, addContact, history }) => (

  <ContactConsumer>

        { value => (
            <div>

            { value.contacts.map(contact =>
                <div>
                <ContactShow
                  {...contact}
                  updateContact={value.updateContact}
                  deleteContact={value.deleteContact}
                  />
              </div>
              )}

              <Link to={{pathname: "/contact"}}>Add New </Link>

              </div>
        )}


    </ContactConsumer>


)

export default ContactIndex;
