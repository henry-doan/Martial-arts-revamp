import React, { Component } from 'react';
import { Header, Segment, Button, Icon, Checkbox, Table } from 'semantic-ui-react';
import EventForm from './EventForm';
import EventConsumer from '../../../providers/EventsProvider'
import {Link} from 'react-router-dom'


class Event extends Component {

 state = { editing: false }
 toggleEdit = () => this.setState({ editing: !this.state.editing })
 render () {
   const { id, title, start_date, end_date, start_time, end_time, description, instructor, flyer, update, deleteEvent } = this.props
   const { editing } = this.state
   return (
       <EventConsumer>
       <Header>Admin • Events</Header>
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
     </Segment>


     <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Featured</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Event Date</Table.HeaderCell>
        <Table.HeaderCell>Event Inscrutor</Table.HeaderCell>
        <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{start_date}</Table.Cell>
        <Table.Cell>{instructor}</Table.Cell>
        <Table.Cell>   <Button icon color='blue' onClick={this.toggleEdit}>
         <Icon name="pencil" />
       </Button>
       <Button icon color='red' onClick={() => deleteEvent(id)}>
         <Icon name="trash" />
       </Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Self defense against for your family</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>William</Table.Cell>
        <Table.Cell>   <Button icon color='blue' onClick={this.toggleEdit}>
         <Icon name="pencil" />
       </Button>
       <Button icon color='red' onClick={() => deleteEvent(id)}>
         <Icon name="trash" />
       </Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Self defense against your family</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>Henry</Table.Cell>
        <Table.Cell>   <Button icon color='blue' onClick={this.toggleEdit}>
         <Icon name="pencil" />
       </Button>
       <Button icon color='red' onClick={() => deleteEvent(id)}>
         <Icon name="trash" />
       </Button></Table.Cell>
      </Table.Row>
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
            <Icon name='calendar alternate outline' /> 
            <Link to='/eventform'>Add Event</Link>Add Event
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

     </EventConsumer>
   )
 }
}
export default Event;