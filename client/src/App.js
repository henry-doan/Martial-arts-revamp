import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Event from './components/admin/event/Event';


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/event" component={Event} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
