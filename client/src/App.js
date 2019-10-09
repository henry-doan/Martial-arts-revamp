import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Event from './components/admin/event/Event';
import EventForm from './components/admin/event/EventForm';
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ProgramIndex from './components/Programs/ProgramIndex';
import ConnectedProgramForm from './components/Programs/ProgramForm';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/programindex" component={ProgramIndex} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/eventform" component={EventForm} />
        <Route exact path="/programForm" component={ConnectedProgramForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
