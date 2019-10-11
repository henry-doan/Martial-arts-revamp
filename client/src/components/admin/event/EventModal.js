import React, { Component } from 'react';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from 'semantic-ui-react';
import ConnectedEventForm from './EventForm';
import {EventConsumer} from '../../../providers/EventProvider';
import {Link} from 'react-router-dom';

class EventModal extends Component {

 state = { editing: false }

 componentDidMount(){
     console.log(this.props)
 }

 
 handleSelect = () => { 
   this.props.addEvent(this.props.id)
   this.props.setModalEvent(false)
  }

 handleDelete = () => { 
   this.props.deleteEvent(this.props.id)
   this.props.setModalEvent(false)
  }


 toggleEdit = () => this.setState({ editing: !this.state.editing })

 render () {
   const { id, title, start_date, end_date, start_time, end_time,
     description, instructor, flyer, open, setModalEvent,addEvent, updateEvent, deleteEvent } = this.props
   const { editing } = this.state
   return (
       <>
                <Modal open={open} onClose={() => setModalEvent(false)} closeIcon>
                <Modal.Content>
                <Segment style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            }}>
            {
                editing ?
                    <ConnectedEventForm
                    { ...this.props }
                    id={id}
                    updateEvent={ this.props.update }
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
            </Modal.Content>

            <Modal.Content>
            <Button icon color='blue' onClick={this.toggleEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button icon color='red' onClick={() => this.handleDelete()}>
                        <Icon name="trash" />
                    </Button>
            </Modal.Content>
            
            <Modal.Actions>
            {/* <Button color='red'>
            <Icon name='remove' /> Cancel
            </Button>
            <Button color='green'>
            <Icon name='checkmark' /> Yes
            </Button> */}
            </Modal.Actions>

                </Modal>

    </>
   )
 }
}

const ConnectedEventModal = (props) => {
    return (
      <EventConsumer>
        { value => (
          <EventModal
            { ...props }
            { ...value }
           
          />
        )}
      </EventConsumer>
    )
  }

export default ConnectedEventModal;
