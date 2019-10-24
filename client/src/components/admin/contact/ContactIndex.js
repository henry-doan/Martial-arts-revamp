import React, {Component} from 'react';
import ContactShow from "./ContactShow";
import {Link} from "react-router-dom";
import { ContactConsumer } from '../../../providers/ContactProvider';
import Navbar from '../../Navbar';
import { Table, Button, Icon } from 'semantic-ui-react';
import {DashItem, DashText, DashPage, DashContent} from '../../styledComponents/DashboardStyles';

const ContactIndex = ({ contacts, updateContact, deleteContact, addContact, }) => (
  <>
  <DashPage>
       <Navbar />
	   <DashContent>
       <Table>
	<Table.Header>
	<Table.Row>
			<Table.HeaderCell>Name</Table.HeaderCell>
			<Table.HeaderCell>Email</Table.HeaderCell>
			<Table.HeaderCell>Phone</Table.HeaderCell>
			<Table.HeaderCell>Interest</Table.HeaderCell>
			<Table.HeaderCell>Delete</Table.HeaderCell>
	</Table.Row>
	</Table.Header>

	<Table.Body>
  <ContactConsumer>
    { value => (
        <>
          { value.contacts.map(contact =>
            <ContactShow
              key={contact.id}
              {...contact}
              deleteContact={value.deleteContact}
            />
          )}
        </>
      )}
  </ContactConsumer>
  </Table.Body>

	<Table.Footer fullWidth>
	<Table.Row>
	<Table.HeaderCell />
	<Table.HeaderCell colSpan='4'>
		<Button
		floated='right'
		icon
		labelPosition='left'
		primary
		size='small'
		>
	<Icon name='user' /> 
  <Link to="/Contact">Add new Contact</Link>
	</Button>
	</Table.HeaderCell>
	</Table.Row>
	</Table.Footer>
	</Table>

	   </DashContent>
  </DashPage>
  </>
)
export default ContactIndex;
