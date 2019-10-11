import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AboutConsumer} from '../../../providers/AboutProvider';

class AboutForm extends Component {
  state = { title: '', content: '',  
}

componentDidMount() {
if (this.props.id) {
    this.setState({ title: this.props.title, content: this.props.content 
    })
}
}

handleContentChange = (value) => {
    this.setState({ content: value })
}

handleChange = (e) => {
const { name, value } = e.target
this.setState({ [name]: value })
}

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.id) {
            this.props.updateAbout(1, this.state)
            this.props.toggleEdit()
        } else {
            this.props.updateAbout(1, this.state)
        }
        // this.setState({ title: '', content: '', })
    }

  render() {
    const { title, content} = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Input 
          required
          placeholder='Title'
          label='Title'
          name='title'
          value={title}
          onChange={this.handleChange}
        />
        <ReactQuill 
            theme="snow"
            required
            placeholder='Content'
            type='TextArea'
            label='content'
            name='content'
            value={content}
            onChange={this.handleContentChange}
        ></ReactQuill>

        {/* <Form.Input 
         
        /> */}

        <Form.Button color='green'>Submit</Form.Button>
        
      </Form>
    )
  }
}

const ConnectedAboutForm = (props) => {
    return (
      <AboutConsumer>
        { value => (
          <AboutForm
            { ...props }
            title={value.title}
            content={value.content}
            addAbout={value.addAbout}
            updateAbout={value.updateAbout}
          />
        )}
      </AboutConsumer>
    )
  }


export default ConnectedAboutForm;