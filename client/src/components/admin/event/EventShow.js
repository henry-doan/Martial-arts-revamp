import React, { Component } from 'react';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from 'semantic-ui-react';
import ConnectedEventForm from './EventForm';
import {EventConsumer} from '../../../providers/EventsProvider';
import {Link} from 'react-router-dom';
import moment from 'moment'



class EventShow extends Component {

 state = { editing: false }

 componentDidMount(){
     console.log(this.props)
 }

 toggleEdit = () => this.setState({ editing: !this.state.editing })

 render () {
   const { id, title, start_date, end_date, start_time, end_time,
     description, instructor, flyer, addEvent, updateEvent, deleteEvent } = this.props
   const { editing } = this.state
   return (
       <>
            <Table.Row>
                <Table.Cell><h1>{title}</h1></Table.Cell>
                <Table.Cell>{moment(start_date).format("MM/DD/YY")}</Table.Cell>
                <Table.Cell>{instructor}</Table.Cell>

                <Table.Cell>
                <Modal trigger={<Button>Event Details</Button>} closeIcon>
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
                    updateEvent={ this.props.update }
                    toggleEdit={this.toggleEdit}
                    />
                :
                    <>
                    <Header>{title}</Header>
                    <p>{moment(start_date).format("MM/DD/YY")}</p>
                    <p>{moment(end_date).format("MM/DD/YY")}</p>
                    <p>{start_time}</p>
                    <p>{end_time}</p>
                    <p>{description}</p>
                    <p>{instructor}</p>
                    <p>{flyer}</p>
                    </>
            }
            </Segment>
            </Modal.Content>

            <Modal.Actions>
            <Button color='red'>
            <Icon name='remove' /> Cancel
            </Button>
            <Button color='green'>
            <Icon name='checkmark' /> Yes
            </Button>
            </Modal.Actions>

                </Modal>
                    <Button icon color='blue' onClick={this.toggleEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button icon color='red' onClick={() => deleteEvent(id)}>
                        <Icon name="trash" />
                    </Button>
            </Table.Cell>
            </Table.Row>

    </>
   )
 }
}

const ConnectedEventShow = (props) => {
    return (
      <EventConsumer>
        { value => (
          <EventShow
            { ...props }
            { ...value }
            // start_date={value.start_date}
            // start_time={value.start_time}
            // end_date={value.end_time}
            // title={value.title}
            // description={value.description}
            // slug_link={value.slug_link}
            // flyer={value.flyer}
            // instructor={value.instructor}
            // addEvent={value.addEvent}
            // updateEvent={value.updateEvent}
          />
        )}
      </EventConsumer>
    )
  }

export default ConnectedEventShow;