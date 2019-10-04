import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import AboutProvider from './providers/AboutProvider';
import EventProvider from './providers/EventProvider';
import ProgramProvider from './providers/ProgramProvider';
import InstructorProvider from './providers/InstructorProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <AboutProvider>
      <EventProvider>
        <ProgramProvider>
          <InstructorProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </InstructorProvider>
      </ProgramProvider>
     </EventProvider>
    </AboutProvider>
  </AuthProvider>
  , document.getElementById('root'));
