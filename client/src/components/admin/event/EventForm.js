import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

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
      this.props.update(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ start_date: '', start_time: '', end_date: '', end_time: '', 
    title: '', description: '', slug_link: '', flyer: '', instructor: '' })
  }


  render() {
    const { start_date,start_time, end_date, end_time, title, description, slug_link, flyer, instructor} = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>

        <input 
          required
          type="date"
          placeholder='Start Date'
          label='start_date'
          name='start_date'
          value={start_date}
          onChange={this.handleChange}
        >
        </input>

        <input 
          required
          type="time"
          placeholder='Start Time'
          label='start_time'
          name='start_time'
          value={start_time}
          onChange={this.handleChange}
        >
       </input>

        <input 
          required
          type="date"
          placeholder='End Date'
          label='end_date'
          name='end_date'
          value={end_date}
          onChange={this.handleChange}
        >
        </input>

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
          label='title'
          name='title'
          value={title}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Description'
          label='description'
          name='description'
          value={description}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Flyer Link'
          label='flyer'
          name='flyer'
          value={flyer}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Led by Instructor Bernales'
          label='instructor'
          name='instructor'
          value={instructor}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='bernalesinstitute.com/events/____'
          label='slug_link'
          name='slug_link'
          value={slug_link}
          onChange={this.handleChange}
        />

        <Form.Button color='green'>Submit</Form.Button>
        
      </Form>
    )
  }
}

export default EventForm;