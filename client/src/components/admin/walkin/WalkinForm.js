import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { WalkinConsumer } from '../../../providers/WalkinProvider';

class WalkinForm extends Component {
 state = { name: "", email: "", phone: "", interest: "", message: "" }

 handleChange = (e, { name, value }) => this.setState({ [name]: value })

 componentDidMount() {
   console.log(this.props)
 }

 handleSubmit = (e) => {
  e.preventDefault();
  const walkin = { ...this.state }
  this.props.addWalkin(walkin)
  this.setState({ name: "", email: "", phone: "", interest: "", message: "" })
  window.location.href = '/'
}

 render() {
   const { name, email, phone, interest, message } = this.state;
   return (
     <>
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
     </>
   )
 }
}

const ConnectedWalkinForm = (props) => {
 return (
   <WalkinConsumer>
     { value => (
       <WalkinForm
         { ...props }
         { ...value }
         
       />
     )}
   </WalkinConsumer>
 )
}

export default ConnectedWalkinForm;