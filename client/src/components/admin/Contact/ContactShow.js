import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ContactShow extends Component {  
  render(){
    const { name, email, phone, interest, notes, updateContact } = this.props
    return (
      <div>
        <h1>id: {id}<br />
        Name: {name}<br />
        Email: {email}<br />
        Phone: {phone}<br />
        Interest: {interest}<br />
        Notes: {notes}<br />
        <Link to={{
          pathname: "/contactForm",
          state: { name, email, phone, interest, notes }
        }}></Link>
        </h1>
        <br />
      </div>
    )
  }
}

export default ContactShow;