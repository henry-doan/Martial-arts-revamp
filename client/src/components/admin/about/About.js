import React from 'react';
import { Card } from 'semantic-ui-react';
import { AboutConsumer } from '../../../providers/AboutProvider';

const About = () => (
  <AboutConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.title }</Card.Header>
          <Card.Meta>
            Information: { value.content }
          </Card.Meta>
        </Card.Content>
      </Card>
    )}
  </AboutConsumer>
)

export default Account;