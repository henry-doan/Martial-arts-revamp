import React, {useEffect, useContext, useState} from 'react';
import { Header, Card, Image } from 'semantic-ui-react';
import { AboutContext } from '../../../providers/AboutProvider';
import ConnectedAboutForm from './AboutForm';
import Navbar from '../../Navbar';

const About = () => {
  const value = useContext(AboutContext);
  const { title, content } = value.abouts[0] || {};

   return(
    <>
      <Navbar />
      <Header>About Admin Page</Header>
      <ConnectedAboutForm />
      <Card fluid>
        <Card.Content>
          <Card.Meta> <Image src={ title }/> </Card.Meta>
          <Card.Meta>
          <div dangerouslySetInnerHTML={{__html: content}} />
          </Card.Meta>
        </Card.Content>
      </Card>
    </>
   )
}

export default About;