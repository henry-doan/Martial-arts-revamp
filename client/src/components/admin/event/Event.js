import React, {useState, useEffect, useContext} from 'react';
import { Menu, Table, Button, Icon, Modal } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {EventContext} from '../../../providers/EventsProvider';
import ConnectedEventShow from '../event/EventShow';
import Moment from '../../../components/calendar/Moment'
import EventModal from './EventModal';

// import { AboutConsumer } from '../../../providers/AboutProvider';

const Event = () => {
     const value = useContext(EventContext);
     const [modalEvent, setModalEvent] = useState(false);
     const [modalShowEvent, setModalShowEvent] = useState({});
     
     useEffect( () => {
        {value.getEvent()}
     },[]);

     useEffect(() => {
        console.log(value.events)
     }, [value.events])

   return (
        // <EventConsumer>
            // { value => (
        <>
                <EventModal open={modalEvent} setModalEvent={setModalEvent} {...modalShowEvent} />
                <Moment
                events={value.events}
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
            <Link to='/eventform' color='white'>Add Event</Link>
            </Button>
                       
                </>
            // )}
        // </EventConsumer>
   ) 
}


export default Event;