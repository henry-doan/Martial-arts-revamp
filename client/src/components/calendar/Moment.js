import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import React from 'react';

const localizer = momentLocalizer(moment)

const Moment = props => (
    <Calendar
        {...props}
      style={{minHeight:'50rem'}}
      localizer={localizer}

      defaultDate = {new Date()}
      startAccessor="start_date"
      endAccessor="end_date"
    />
)

export default Moment;


// =====================================

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import EventForm from '../../components/admin/event/EventForm';
// import EventModal from '../../components/admin/event/EventModal';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import {EventConsumer} from '../../providers/EventProvider';
//
//
// const localizer = momentLocalizer(moment);
// let now = new Date();
//
// class Moment extends Component {
//
//
//   handleSelect = ({ start_date, end_date }) => {
//    const title = window.prompt('New Event Name')
//    if (title)
//      this.setState({
//        events: [
//          ...this.props.events,
//          {
//            start_date,
//            end_date,
//            title,
//          },
//        ],
//      })
//  }
//
//
//
//   render() {
//     return (
//         <div style={{ height: '500pt'}}>
//         <Calendar
//         //  {...props}
//          selectable
//          localizer={localizer}
//          startAccessor="start_date"
//          endAccessor="end_date"
//          events={this.props.events}
//          scrollToTime={new Date(1970, 1, 1, 6)}
//          defaultDate={new Date(2019, 10, 12)}
//          onSelectEvent={event => alert(event.title)}
//          onSelectSlot={this.handleSelect}
//        />
//         </div>
//     );
//   }
// }
//
// export default Moment;


//===========================================
