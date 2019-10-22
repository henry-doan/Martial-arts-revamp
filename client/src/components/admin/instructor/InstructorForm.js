import React, { Component } from 'react';
import {InstructorConsumer} from '../../../providers/InstructorProvider';
import { Form } from 'semantic-ui-react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class InstructorForm extends Component {
  state = { first_name: '', last_name: '', specialty:'', years: '',
   experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '', sm_youtube: '', image: '', bio: '' 
}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ first_name: this.props.first_name, last_name: this.props.last_name, 
        specialty: this.props.specialty, years: this.props.years, image: this.props.image, 
        experience: this.props.experience, sm_facebook: this.props.sm_facebook, 
        sm_linkedin: this.props.sm_linkedin, sm_instagram: this.props.sm_instagram, sm_youtube: this.props.sm_youtube, bio: this.props.bio,
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
    experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '', sm_youtube: '', image: '', bio: ''})
  }

  render() {
    const { first_name, last_name, specialty, years, image, experience, sm_facebook, sm_linkedin, sm_instagram, sm_youtube, bio} = this.state 
    return (
<section style={{padding: '2em'}}>
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

        <ReactQuill 
        theme="snow"
        required
        key="toolbar"
        ref="toolbar"
        placeholder='Instructor Story'
        type='TextArea'
        label='content'
        name='bio'
        value={bio}
        onChange={this.handleContentChange}
        style={{height:'500px', marginBottom:'4em'}}>
      

        </ReactQuill>  
{/* 
        <Form.Input 
          required
          placeholder='Years Expierence ie: 2, 5, 10'
          label='years'
          name='years'
          value={years}
          onChange={this.handleChange}
        /> */}

        <Form.Input
          required
          placeholder='Bio'
          label='bio'
          name='bio'
          value={bio}
          onChange={this.handleChange}
        />
        
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

        {/* <Form.Input 
          required
          placeholder='Youtube Link'
          label='sm_youtube'
          name='sm_youtube'
          value={sm_youtube}
          onChange={this.handleChange}
        /> */}

        <Form.Button color='green'>Submit</Form.Button>
        
      </Form>
</section>
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


export default ConnectedInstructorForm;