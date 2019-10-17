import React, { Component } from 'react';
import axios from 'axios';

export const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

export class EventProvider extends React.Component {

  state = {events: []};

  getEvent = () => {
    axios.get('/api/events')
    .then( res => {
      console.log("success")

      this.setState({ events: res.data })
    })
    .catch( err => {
      console.log("fail")
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
      <EventContext.Provider value={{
        events: this.state.events,
        getEvent: this.getEvent,
        addEvent: this.addEvent,
        updateEvent: this.updateEvent,
        deleteEvent: this.deleteEvent
      }}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}

export default EventProvider;
