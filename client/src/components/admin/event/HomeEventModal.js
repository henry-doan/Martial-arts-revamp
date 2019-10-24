import React, { Component } from 'react';
import { Header, Card, Image, Button, Icon, Checkbox, Table, Modal } from 'semantic-ui-react';
import ConnectedEventForm from './EventForm';
import {EventConsumer} from '../../../providers/EventProvider';
import {Link} from 'react-router-dom';
import moment from 'moment'


class HomeEventModal extends Component {

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

      <Image src={flyer} />

      <Header>{title}</Header>
      <p>{moment(start_date).format("MM/DD/YY")} - {moment(end_date).format("MM/DD/YY")}</p>
      <p>{start_time} - {end_time}</p>
      <p>Event Info:</p>
      <p>{description}</p>
      <p>Led by:</p>
      <p>{instructor}</p>

      </Modal.Content>
      </Modal>
    </>
   )
 }
}

const ConnectedHomeEventModal = (props) => {
    return (
      <EventConsumer>
        { value => (
          <HomeEventModal
            { ...props }
            { ...value }

          />
        )}
      </EventConsumer>
    )
  }

export default ConnectedHomeEventModal;