import React, {Fragment} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>

    </Container>

  </Fragment>
)


export default App;
