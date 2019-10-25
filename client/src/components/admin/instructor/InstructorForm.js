import React, { Component } from 'react';
import {InstructorConsumer} from '../../../providers/InstructorProvider';
import { Form } from 'semantic-ui-react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../Navbar';
import {DashItem, DashText, DashPage, DashContent} from '../../styledComponents/DashboardStyles';

class InstructorForm extends Component {
  state = { first_name: '', last_name: '', specialty:'', years: '',
   experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '', sm_youtube: '', image: '', bio: '' 
}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ first_name: this.props.first_name, last_name: this.props.last_name, 
        specialty: this.props.specialty, years: this.props.years, image: this.props.image, 
        experience: this.props.experience, sm_facebook: this.props.sm_facebook, sm_twitter: this.props.sm_twitter,
        sm_linkedin: this.props.sm_linkedin, sm_instagram: this.props.sm_instagram, sm_youtube: this.props.sm_youtube, bio: this.props.bio,
      })
    }
  }

  handleContentChange = (value) => {
    this.setState({ bio: value })
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
    experience: '', sm_facebook: '', sm_linkedin: '', sm_instagram: '',
     sm_youtube: '', image: '', bio: '', sm_twitter: ''})
  }

  render() {
    const { first_name, last_name, specialty, years, image, experience, 
      sm_facebook, sm_linkedin, sm_instagram, sm_youtube, bio, sm_twitter} = this.state 
    return (
      <>
<DashPage>
<Navbar />
<DashContent>

      <Form onSubmit={this.handleSubmit}>

        <Form.Input 
          required
          placeholder='First Name'
          label='First Name'
          name='first_name'
          value={first_name}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Last Name'
          label='Last Name'
          name='last_name'
          value={last_name}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Instructor Specialty'
          label='Specialty'
          name='specialty'
          value={specialty}
          onChange={this.handleChange}
        />

        <Form.Input 
          required
          placeholder='Instructor Image'
          label='Image Link'
          name='image'
          value={image}
          onChange={this.handleChange}
        />

        <ReactQuill 
        theme="snow"
        required
        key="toolbar"
        ref="toolbar"
        placeholder='Biography'
        type='TextArea'
        label='bio'
        name='bio'
        value={bio}
        onChange={this.handleContentChange}
        style={{height:'300px', marginBottom:'4em'}}>
        </ReactQuill> 

        <Form.Input 

          placeholder='Facebook Link'
          label='Facebook'
          name='sm_facebook'
          value={sm_facebook}
          onChange={this.handleChange}
        />

        <Form.Input 
          placeholder='LinkedIn Link'
          label='LinkedIn'
          name='sm_linkedin'
          value={sm_linkedin}
          onChange={this.handleChange}
        />

        <Form.Input 
          placeholder='Instagram Link'
          label='Instagram'
          name='sm_instagram'
          value={sm_instagram}
          onChange={this.handleChange}
        />

        <Form.Button color='red'>Save</Form.Button>
        
      </Form>
</DashContent>
</DashPage>
	</>
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