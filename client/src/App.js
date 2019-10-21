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
import ProgramIndex from './components/admin/programs/ProgramIndex';
import ConnectedProgramForm from './components/admin/programs/ProgramForm';
import FetchUser from './components/FetchUser';
import ConnectedContactForm from './components/admin/contact/ContactForm';
import ConnectedWalkinForm from './components/admin/walkin/WalkinForm';
import Footer from './components/staticpages/footer/Footer'
import Home from './components/staticpages/home/Home';
import HomeAboutPage from './components/staticpages/about/HomeAboutPage';
import Hotkey from './components/staticpages/shared/Hotkey';
import ProgramLandingShow from './components/admin/programs/ProgramLandingShow';
import ProgramLandingShows from './components/admin/programs/ProgramLandingShows';
import ContactIndex from './components/admin/contact/ContactIndex';
import ContactPage from './components/staticpages/staticcontact/ContactPage';


const App = () => (
  <FetchUser>
    <Container fluid>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/admin/event" component={Event} />
        <Route exact path="/admin/eventform" component={EventForm} />
        <Route exact path="/admin/programForm" component={ConnectedProgramForm} />
        <Route exact path="/admin/programindex" component={ProgramIndex} />

        <Route exact path="/admin/about" component={About} />
        <Route exact path="/admin/aboutform" component={AboutForm} />

        <Route exact path="/admin/instructor" component={Instructor} />
        <Route exact path="/admin/instructorform" component={InstructorForm} />

        <Route exact path="/admin/contact" component={ConnectedContactForm} />
        <Route exact path="/admin/contacts" component={ContactIndex} />
        <Route exact path="/admin/walkin" component={ConnectedWalkinForm} />

        {/* STATIC PAGES */}


        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={HomeAboutPage} />

        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/instructorform" component={InstructorForm} />
        <Route exact path="/programLandingShow" component={ProgramLandingShow} />
        <Route exact path="/programshow/:id" component={ProgramLandingShows} />
        
        <Route exact path="/contactpage" component={ContactPage} />

        <Route component={NoMatch} />
      </Switch>
    </Container>
    <Hotkey />
  </FetchUser>
)

export default App;
