import React, {useState, useEffect, useContext} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {EventContext} from '../../../providers/EventProvider';
import Moment from '../../../components/calendar/Moment'
import EventModal from './EventModal';
import Navbar from '../../Navbar';
import {DashItem, DashText, DashPage, DashContent} from '../../styledComponents/DashboardStyles';



const Event = () => {
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

     console.log(value.events)
     useEffect(() => {
     }, [value.events])

   return (
        <>
        <DashPage>
        <Navbar/>
           <DashContent>

                <EventModal open={modalEvent} setModalEvent={setModalEvent} {...modalShowEvent} />
                <Moment
                events={formatEvent()}
                onSelectSlot={({s,e}) => console.log(s,e)}
                onSelectEvent={(event) => {
                setModalShowEvent(event);
                setModalEvent(true);
                }}
                 />


            <Button
                floated='right'
                icon
                color='white'
                labelPosition='left'
                primary
                size='small'
            >
            <Icon name='calendar alternate outline' />
            <Link to='/admin/eventform' color='white'>Add Event</Link>
            </Button>
           </DashContent>
        </DashPage>

                </>
   )
}


export default Event;