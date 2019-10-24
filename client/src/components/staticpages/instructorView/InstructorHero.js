import React, {Component} from 'react';
import { Image, } from 'semantic-ui-react';
import { InstructorConsumer } from '../../../providers/InstructorProvider';

class InstructorHero extends Component {

render () {
const { id, first_name, last_name, specialty, image, bio, years, experience, sm_facebook,
sm_linkedin, sm_instagram, sm_youtube, addInstructor, updateInstructor, deleteInstructor } = this.props

return (
    <>

    <Image src={image}/>
   
    </>
   )
 }
}

const ConnectedInstructorHero = (props) => {
    return (
      <InstructorConsumer>
        { value => (
          <InstructorHero
            { ...props }
            { ...value }
          />
        )}
      </InstructorConsumer>
    )
  }

export default ConnectedInstructorHero;