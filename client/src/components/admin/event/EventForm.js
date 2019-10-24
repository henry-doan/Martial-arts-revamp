import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import {EventConsumer} from '../../../providers/EventProvider';
import withRouter from 'react-router-dom';

class EventForm extends Component {
  state = { start_date: '', start_time: '', end_date: '', end_time: '', 
  title: '', description: '', slug_link: '', flyer: '', instructor: '' }

  componentDidMount() {
    if (this.props.id) {
      this.setState({ start_date: this.props.start_date, start_time: this.props.start_time, end_date: this.props.end_date, end_time: 
        this.props.end_time, title: this.props.title, description: this.props.description, slug_link: this.props.slug_link, 
        flyer: this.props.flyer, instructor: this.props.instructor,  
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
      this.props.updateEvent(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addEvent(this.state)
      this.props.history.push('/admin/event');
    }
    this.setState({ start_date: '', start_time: '', end_date: '', end_time: '', 
    title: '', description: '', slug_link: '', flyer: '', instructor: '' })
  }


  render() {
    const { start_date,start_time, end_date, end_time, title, description, slug_link, flyer, instructor} = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>
          <label>Start Date</label>
        <input 
          required
          type="date"
          placeholder='03/18/2019'
          label='Start date'
          name='start_date'
          value={start_date}
          onChange={this.handleChange}
        >
        </input>
        <label>Start Time</label>
        <input 
          required
          type="time"
          placeholder='3:30 PM'
          label='Start Time'
          name='start_time'
          value={start_time}
          onChange={this.handleChange}
        >
       </input>
       <label>End Date</label>
        <input 
          required
          type="date"
          placeholder='10/31/2019'
          label='End date'
          name='end_date'
          value={end_date}
          onChange={this.handleChange}
        >
        </input>
        <label>End Time</label>
        <input 
          required
          type="time"
          required
          placeholder='End Time'
          label='end_time'
          name='end_time'
          value={end_time}
          onChange={this.handleChange}
          >
          </input>
        
        <Form.Input 
          required
          placeholder='Title'
          label='Event Name'
          name='title'
          value={title}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Description'
          label='Event Details'
          name='description'
          value={description}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='http://...'
          label='Flyer Link'
          name='flyer'
          value={flyer}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Led by Instructor Bernales'
          label='Instructor'
          name='instructor'
          value={instructor}
          onChange={this.handleChange}
        />

        <Form.Button 
        color='green' 
        >Save
        </Form.Button>
        
      </Form>


)
}
}
            const ConnectedEventForm = (props) => {
                return (
                  <EventConsumer>
                    { value => (
                      <EventForm
                        { ...props }
                        addEvent={value.addEvent}
                        updateEvent={value.updateEvent}
                      />
                    )}
                  </EventConsumer>
                )
              }

export default ConnectedEventForm;
