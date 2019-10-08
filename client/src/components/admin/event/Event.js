import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import EventForm from './EventForm';
class Event extends Component {
 state = { editing: false }
 toggleEdit = () => this.setState({ editing: !this.state.editing })
 render () {
   const { id, title, start_date, end_date, start_time, end_time, description, instructor, flyer, update, deleteEvent } = this.props
   const { editing } = this.state
   return (
     <Segment style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between'
     }}>
       {
         editing ?
             <EventForm
               { ...this.props }
               update={ update }
               toggleEdit={this.toggleEdit}
             />
           :
             <>
               <Header>{title}</Header>
               <p>{start_date}</p>
               <p>{end_date}</p>
               <p>{start_time}</p>
               <p>{end_time}</p>
               <p>{description}</p>
               <p>{instructor}</p>
               <p>{flyer}</p>
             </>
       }
       <Button icon color='blue' onClick={this.toggleEdit}>
         <Icon name="pencil" />
       </Button>
       <Button icon color='red' onClick={() => deleteEvent(id)}>
         <Icon name="trash" />
       </Button>
     </Segment>
   )
 }
}
export default Event;