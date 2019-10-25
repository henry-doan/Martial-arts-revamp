import React, {Component} from 'react';
import { Icon, Grid, } from 'semantic-ui-react';
import { InstructorConsumer } from '../../../providers/InstructorProvider';

class InstructorPage extends Component {

render () {
const { id, first_name, last_name, specialty, image, bio, years, experience, sm_facebook,
sm_linkedin, sm_instagram, sm_youtube, addInstructor, updateInstructor, deleteInstructor } = this.props

return (
    <>
    <Grid columns={1} doubling>
    <Grid.Row>

    <Grid.Column>
    <h1>{first_name} {last_name} </h1>
    <h2>{specialty} </h2>
    <p>
    <div dangerouslySetInnerHTML={{__html: bio}} />
    </p>
    <a href={sm_facebook} target="_blank">
    <Icon name='facebook' size='large' />
    </a>

    <a href={sm_linkedin} target="_blank">
    <Icon name='linkedin' size='large' />
    </a>

    <a href={sm_instagram} target="_blank">
    <Icon name='instagram' size='large' />
    </a>    
    </Grid.Column>

    </Grid.Row>
    </Grid>
    </>
   )
 }
}

const ConnectedInstructorPage = (props) => {
    return (
      <InstructorConsumer>
        { value => (
          <InstructorPage
            { ...props }
            { ...value }
          />
        )}
      </InstructorConsumer>
    )
  }

export default ConnectedInstructorPage;