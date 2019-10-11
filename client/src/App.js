import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Event from './components/admin/event/Event';
import EventForm from './components/admin/event/EventForm';
import About from './components/admin/about/About';
import AboutForm from './components/admin/about/AboutForm';
import Instructor from './components/admin/instructor/Instructor';
import InstructorForm from './components/admin/instructor/InstructorForm';
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
// // import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// moment.locale('en-GB');
// BigCalendar.momentLocalizer(moment);

const App = () => (
  <FetchUser>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/event" component={Event} />
        <Route exact path="/eventform" component={EventForm} />

        <Route exact path="/about" component={About} />
        <Route exact path="/aboutform" component={AboutForm} />

        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/instructorform" component={InstructorForm} />

        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
)

export default App;
