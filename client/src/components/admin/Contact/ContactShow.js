import React, {Component} from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import Navbar from '../../Navbar';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from './node_modules/semantic-ui-react';

class ContactShow extends Component {
  render(){
   const { id, name, email, phone, interest, notes, deleteContact, history } = this.props
   return (
     <>
      <Table.Row>
    <Table.Cell><h1>{name}</h1></Table.Cell>
    <Table.Cell>{email}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>{interest}</Table.Cell>
    <Table.Cell>
       <Link to={{
         pathname: "/contact",
         state: { id, name, email, phone, interest, notes, deleteContact, history }
       }}></Link>
        <Button color='red' onClick = {() => deleteContact(id)}>delete</Button>
    </Table.Cell>

        </Table.Row>
     </>
   )
 }
}

export default ContactShow;