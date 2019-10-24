import React, { Component } from 'react';
import { Header, Form, Modal } from 'semantic-ui-react';
import { ContactConsumer } from '../../../providers/ContactProvider';

class ContactForm extends Component {
  state = { name: '', phone: '', email: '', interest: '',
   message: '', 
}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ name: this.props.name, phone: this.props.phone, 
        email: this.props.email, interest: this.props.interest, message: this.props.message,
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateContact(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addContact(this.state)
      window.location.href = '/contact'
    }
    this.setState({ name: '', phone: '', email:'', interest: '',
    message: '',})
  }

  render() {
    const { name, email, phone, interest, message } = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Input 
          required
          placeholder='Jane Doe'
          label='Name'
          name='name'
          value={name}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='123-456-7890'
          label='Phone'
          name='phone'
          value={phone}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='jane@example.com'
          label='Email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Muay Thai Boxing'
          label='Interest'
          name='interest'
          value={interest}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Please leave us a comment or question if you have any!'
          label='Message'
          name='message'
          value={message}
          onChange={this.handleChange}
        />

        <Form.Button color='red'>Submit</Form.Button>
        
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
          {...value}

          addContact={value.addContact}
        />
      )}
    </ContactConsumer>
  )
}

export default ConnectedContactForm;
