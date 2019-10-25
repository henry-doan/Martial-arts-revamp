import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {AboutConsumer} from '../../../providers/AboutProvider';

class AboutForm extends Component {
  state = { title: '', content: '',}

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
      <section style={{padding:'1em'}}>
      <Form onSubmit={this.handleSubmit}>

        <Form.Input 
          required
          placeholder='Image Link'
          label='Image'
          name='title'
          value={title}
          onChange={this.handleChange}
        />

        <ReactQuill 
        theme="snow"
        required
        key="toolbar"
        ref="toolbar"
        placeholder='Content'
        type='TextArea'
        label='content'
        name='content'
        value={content}
        onChange={this.handleContentChange}
        style={{height:'500px', marginBottom:'4em'}}>
        </ReactQuill>  
         
        <Form.Button color='green'>Save</Form.Button>
        
      </Form>
      </section>
    )
  }
}

const ConnectedAboutForm = (props) => {
    return (
      <AboutConsumer>
        { value => (
          <AboutForm
            { ...props }
            id={value.abouts[0].id}
            title={value.abouts[0].title}
            content={value.abouts[0].content}
            addAbout={value.addAbout}
            updateAbout={value.updateAbout}
          />
        )}
      </AboutConsumer>
    )
  }


export default ConnectedAboutForm;