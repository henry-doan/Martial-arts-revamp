import React, {Component} from "react";
import { Link } from "react-router-dom";

class ContactShow extends Component {
  render(){
   const { id, name, email, phone, interest, notes, deleteContact, history } = this.props
   return (
     <div>
       <h1>{name}</h1>
       <h3>{email}</h3>
       <h3>{phone}</h3>
       <h3>{interest}</h3>
       <h3>{notes}</h3>
       <Link to={{
         pathname: "/contact",
         state: { id, name, email, phone, interest, notes, deleteContact, history }
       }}></Link>

        <button onClick = {() => deleteContact(id)}>delete</button>
     </div>
   )
 }
}

export default ContactShow;