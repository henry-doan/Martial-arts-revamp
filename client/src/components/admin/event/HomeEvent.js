import React, {useState, useEffect, useContext} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {EventContext} from '../../../providers/EventProvider';
import Moment from '../../../components/calendar/Moment'
import HomeEventModal from './HomeEventModal';


const HomeEvent = () => {
     const value = useContext(EventContext);
     const [modalEvent, setModalEvent] = useState(false);
     const [modalShowEvent, setModalShowEvent] = useState({});
     const formatEvent = () => {
       return value.events.map( (event) => ({
        ...event,
         start_date: new Date(event.start_date + " 00:00"),
         end_date: new Date(event.end_date + " 00:00"),
       }))
     }

     useEffect( () => {
        {value.getEvent()}
     },[]);

     useEffect(() => {
        console.log(value.events)
     }, [value.events])

   return (
   <>
   <HomeEventModal open={modalEvent} setModalEvent={setModalEvent} {...modalShowEvent} />
   <Moment
   events={formatEvent()}
   onSelectSlot={({s,e}) => console.log(s,e)}
   onSelectEvent={(event) => {
   setModalShowEvent(event);
   setModalEvent(true);
   }}
   />

   </>
   )
}


export default HomeEvent;