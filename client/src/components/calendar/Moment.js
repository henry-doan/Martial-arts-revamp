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