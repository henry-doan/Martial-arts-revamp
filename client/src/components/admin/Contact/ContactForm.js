import React, { Component } from 'react';
import { Header, Form } from 'semantic-ui-react';
import { ContactConsumer } from '../../../providers/ContactProvider';

class ContactForm extends Component {
 state = { name: "", email: "", phone: "", interest: "", message: "" }

 handleChange = (e, { name, value }) => this.setState({ [name]: value })

 handleSubmit = (e) => {
   e.preventDefault();
   const contact = { ...this.state }
   this.props.addContact(contact)
   this.setState({ name: "", email: "", phone: "", interest: "", message: "" })
   window.location.href = '/'
 }

 render() {
   const { name, email, phone, interest, message } = this.state;
   return (
<>
<Header>Schedule A Free Workout</Header>
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
       <Form.Button color="red">Submit</Form.Button>
     </Form>
     </>
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
         phone={value.phone}
         interest={value.interest}
         message={value.message}
         addContact = {value.addContact}
       />
     )}
   </ContactConsumer>
 )
}

export default ConnectedContactForm;