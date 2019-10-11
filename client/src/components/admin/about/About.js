import React, {useEffect, useContext, useState} from 'react';
import { Header, Card } from 'semantic-ui-react';
import { AboutContext } from '../../../providers/AboutProvider';
import ConnectedAboutForm from './AboutForm';


const About = () => {

  const value = useContext(AboutContext);
  const { title, content } = value.abouts[0] || {};

  useEffect( () => {
    value.getAbout()
   },[]);

   return(
    <>
      <Header>About Admin Page</Header>
     <ConnectedAboutForm />
        <Card>
          <Card.Content>
            <Card.Header> { title } </Card.Header>
            <Card.Meta>
              Information: { content }
            </Card.Meta>
          </Card.Content>
        </Card>
    </>
   )

}

export default About;