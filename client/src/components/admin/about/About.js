import React, {useEffect, useContext, useState} from 'react';
import { Header, Card, Image, Grid} from 'semantic-ui-react';
import { AboutContext } from '../../../providers/AboutProvider';
import ConnectedAboutForm from './AboutForm';
import Navbar from '../../Navbar';
import {DashItem, DashText, DashPage, DashContent} from '../../styledComponents/DashboardStyles';

const About = () => {
  const value = useContext(AboutContext);
  const { title, content } = value.abouts[0] || {};

   return(
    <>
    <DashPage>
      <Navbar />
      <DashContent>
      <Header>About Admin Page</Header>
      
      <Card fluid>
      <ConnectedAboutForm />
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Meta> <Image src={ title }/> </Card.Meta>
          <Card.Meta>
          <div dangerouslySetInnerHTML={{__html: content}} />
          </Card.Meta>
        </Card.Content>
      </Card>

      </DashContent>
    </DashPage>
    </>
   )
}

export default About;