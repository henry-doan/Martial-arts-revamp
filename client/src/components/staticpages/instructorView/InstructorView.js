import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Grid, Image, Card, Icon, Menu, Segment } from 'semantic-ui-react';
import style from '../instructorView/InstructorCSS.css';
import instructorForm from '../../admin/instructor/InstructorForm';
import { InstructorConsumer } from '../../../providers/InstructorProvider';
 
class InstructorView extends Component {
    state = { currentInstructorIndex: 0, currentInstructor: {} }
    
    onInstructorChange = (newIndex) => this.setState({currentInstructorIndex: newIndex});

    renderInstructorImages = () => {
      return this.props.instructors.map((instructor) => (
        <div key={instructor.id}>
          <img src={instructor.image} />
        </div>
      ))
    }

    render() {
      const instructor = this.props.instructors[this.state.currentInstructorIndex];
        return (
        <div>
          <div class="CarWrap">
            <Carousel onChange={this.onInstructorChange} style={{margin: "0px"}} >
              {this.renderInstructorImages()}
            </Carousel>
          </div>

            <div>
            {/* <div style={{display: "flex", justifyContent: "flex-end", margin: "10px"}}> */}
              {/* <h1>Instructor {insructors[this.state.currentInstructor].name}</h1> */}
              <section class="instructorContent">
              <h1>Instructor: {instructor && instructor.first_name} {instructor && instructor.last_name}</h1>
              <p>Speciality: {instructor && instructor.specialty}</p>
              <p>Text: {instructor && instructor.bio}</p>
            <Icon name='facebook' size='small' />
            <Icon name='twitter' size='small' />        
            <Icon name='instagram' size='small' />
              </section>
              
            </div>
            </div>
        );
    }
};

const ConnectedInstructorView = (props) => {
  return (
    <InstructorConsumer>
      { value => (
        <InstructorView 
          { ...props }
          getInstructor={value.getInstructor}
          instructors={value.instructors}
        />
      )}
    </InstructorConsumer>
  )
}

export default ConnectedInstructorView;