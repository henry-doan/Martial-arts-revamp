import React, { Component } from 'react';
import {InstructorConsumer} from '../../../providers/InstructorProvider';
import { Form } from 'semantic-ui-react';

class InstructorForm extends Component {
  state = { first_name: '', last_name: '', specialty:'', years: '',
   experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '', sm_youtube: '', image: '' 
}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ first_name: this.props.first_name, last_name: this.props.last_name, 
        specialty: this.props.specialty, years: this.props.years, images: this.props.images, 
        experience: this.props.experience, sm_facebook: this.props.sm_facebook, 
        sm_linkedin: this.props.sm_linkedin, sm_instagram: this.props.sm_instagram, sm_youtube: this.props.sm_youtube, 
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateInstructor(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addInstructor(this.state)
      this.props.history.push('/admin/instructor');
    }
    this.setState({ first_name: '', last_name: '', specialty:'', years: '',
    experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '', sm_youtube: '', image: ''})
  }

  render() {
    const { first_name, last_name, specialty, years,image, experience, sm_facebook, sm_linkedin, sm_instagram, sm_youtube} = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Input 
          required
          placeholder='First Name'
          label='first_name'
          name='first_name'
          value={first_name}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Last Name'
          label='last_name'
          name='last_name'
          value={last_name}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Instructor Specialty'
          label='specialty'
          name='specialty'
          value={specialty}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Instructor Image'
          label='image'
          name='image'
          value={image}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Years Expierence ie: 2, 5, 10'
          label='years'
          name='years'
          value={years}
          onChange={this.handleChange}
        />

        {/* <Form.Select 
          required
          placeholder='Expierience'
          label='experience'
          name='experience'
          value={experience}
          onChange={this.handleChange}
          options={experienceOptions}
        /> */}
        
        <Form.Input 
          required
          placeholder='Facebook Link'
          label='sm_facebook'
          name='sm_facebook'
          value={sm_facebook}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Linkedin Link'
          label='sm_linkedin'
          name='sm_linkedin'
          value={sm_linkedin}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Instagram Link'
          label='sm_instagram'
          name='sm_instagram'
          value={sm_instagram}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Youtube Link'
          label='sm_youtube'
          name='sm_youtube'
          value={sm_youtube}
          onChange={this.handleChange}
        />

        <Form.Button color='green'>Submit</Form.Button>
        
      </Form>
    )
  }
}

const ConnectedInstructorForm = (props) => {
  return (
    <InstructorConsumer>
      { value => (
        <InstructorForm
          { ...props }
          {...value}

          addInstructor={value.addInstructor}
          updateInscrutor={value.updateInscrutor}
        />
      )}
    </InstructorConsumer>
  )
}

// const experienceOptions = [
//     { key: "nb", text: "No Belt", value: "No Belt", },
//     { key: "wb", text: "White Belt", value: "No Belt", },
//     { key: "yb", text: "Yellow Belt", value: "No Belt", },
//     { key: "ybb", text: "Yellow Belt", value: "No Belt", },
//     { key: "gb", text: "Green Belt", value: "No Belt", },
//     { key: "gbb", text: "Green Black Belt", value: "No Belt", },
//     { key: "pb", text: "Purple Belt", value: "No Belt", },
//     { key: "pbb", text: "Purple Black Belt", value: "No Belt", },
//     { key: "ob", text: "Orange Belt", value: "No Belt", },
//     { key: "obb", text: "Orange Black Belt", value: "No Belt", },
//     { key: "bb", text: "Blue Belt", value: "No Belt", },
//     { key: "bbb", text: "Blue Black Belt", value: "No Belt", },
//     { key: "brb", text: "Brown Belt", value: "No Belt", },
//     { key: "brbb", text: "Brown Black Belt", value: "No Belt", },
//     { key: "rb", text: "Red Belt", value: "No Belt", },
//     { key: "rbb", text: "Red Black Belt", value: "No Belt", },
//     { key: "blckb", text: "Black Belt", value: "No Belt", },
// ];

export default ConnectedInstructorForm;