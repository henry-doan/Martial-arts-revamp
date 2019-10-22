import React from 'react'
import {HomeEventWrapper} from '../../styledComponents/HomeCalendarStyles'
import Moment from '../../calendar/Moment'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import HomeEvent from '../../admin/event/HomeEvent';

const HomeCalendar = () => (
<>
<HomeEventWrapper>
<HomeEvent />
</HomeEventWrapper>
</>
)

export default HomeCalendar;