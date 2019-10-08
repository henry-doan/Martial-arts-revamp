import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ContactConsumer } from '../../../providers/ContactProvider';
class ContactForm extends Component {
 state = {
   name: this.props.name,
   content: this.props.content
 }
 handleChange = (e, { name, value }) => this.setState({ [name]: value })
 handleSubmit = (e) => {
   e.preventDefault();
   const contact = { ...this.state }
   this.props.updateContact(contact)
 }
 render() {
   const { name, email, phone, interest, message } = this.state;
   return (
     <Form onSubmit={this.handleSubmit}>
       <Form.Input
         label="Name"
         type="text"
         name="name"
         value={name}
         onChange={this.handleChange}
       />
       <Form.Input
         label="Email"
         type="text"
         name="email"
         value={email}
         onChange={this.handleChange}
       />
        <Form.Input
         label="Phone"
         type="text"
         name="phone"
         value={phone}
         onChange={this.handleChange}
       />
        <Form.Input
         label="Interest"
         type="text"
         name="interest"
         value={interest}
         onChange={this.handleChange}
       />
        <Form.Input
         label="Message"
         type="text"
         name="message"
         value={message}
         onChange={this.handleChange}
       />
       <Form.Button color="gray">Save</Form.Button>
     </Form>
   )
 }
}
const ConnectedContactForm = (props) => {
 return (
   <ContactConsumer>
     { value => (
       <ContactForm
         { ...props }
         name={value.name}
         email={value.email}
         phone={phone.value}
         interest={interest.value}
         message={message.value}
       />
     )}
   </ContactConsumer>
 )
}
export default ConnectedContactForm;