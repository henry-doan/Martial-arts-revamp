import React from 'react';
import axios from 'axios';

const EventContext = React.createContext();

export const EventConsumer = EventContext.Consumer;

export class EventProvider extends React.Component {

  state = {events: []};

  componentDidMount(){
    axios.get('/api/events')
    .then( res => {
      this.setState({ events: res.data})
    })
    .catch( err => {
      console.log(err)
    })
  }

  addEvent = (incomingEvent) => {
    const event = incomingEvent
    axios.post('/api/events', {event})
    .then(res => {
      const {events} = this.state
      this.setState({events: [ ...events, res.data]})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateEvent = (id, event) => {
    axios.put(`/api/events/${id}`, { event })
    .then( res => {
      const events = this.state.events.map ( p => {
        if (p.id === id)
        return res.data
        return p
      })
      this.setState({events})
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteEvent = (id) => {
    axios.delete(`/api/events/${id}`)
    .then( res => {
      const {events} = this.state
      this.setState({ events: events.filter( p => p.id !== id)})
    })
    .catch (err => {
      console.log(err)
    })
  }

  render() {
    return (
      <EventContext.Provider value={this.state}>
        {this.props.children}
      </EventContext.Provider>
    )
  }

}

export default EventProvider;
