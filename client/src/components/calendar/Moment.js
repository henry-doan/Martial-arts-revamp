import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from 'react';

const localizer = momentLocalizer(moment)

const Moment = props => (
  <div style={{padding:"100px"}}>
    <Calendar
        {...props}
      style={{minHeight:'50rem'}}
      localizer={localizer}
    //   events={[]}
      startAccessor="start_date"
      endAccessor="end_date"
    />
  </div>
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

// const localizer = momentLocalizer(moment);
// let now = new Date();

// class Moment extends Component {
//     state = { events: [
//       {
//           id: 0,
//           title: 'All Day Event very long title',
//           allDay: true,
//           start: new Date(2019, 6, 0),
//           end: new Date(2019, 6, 1),
//       },
//       {
//           id: 1,
//           title: 'Long Event',
//           start: new Date(2019, 3, 7),
//           end: new Date(2019, 3, 10),
//       },
//       {
//           id: 2,
//           title: 'Right now Time Event',
//           start: now,
//           end: now,
//       },
//     ]
//   }

//   handleSelect = ({ start_date, end_date }) => {
//    const title = window.prompt('New Event Name')
//    if (title)
//      this.setState({
//        events: [
//          ...this.state.events,
//          {
//            start_date,
//            end_date,
//            title,
//          },
//        ],
//      })
//  }



//   render() {
//     return (
//         <div style={{ height: '500pt'}}>
//         <Calendar
//         //  {...props}
//          selectable
//          localizer={localizer}
//          startAccessor="start_date"
//          endAccessor="end_date"
//          events={this.state.events}
//          scrollToTime={new Date(1970, 1, 1, 6)}
//          defaultDate={new Date(2019, 10, 12)}
//          onSelectEvent={event => alert(event.title)}
//          onSelectSlot={this.handleSelect}
//        />
//         </div>
//     );
//   }
// }

// export default Moment;