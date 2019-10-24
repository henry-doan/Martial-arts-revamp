import React, {Component} from "react";
import { Form, } from "semantic-ui-react";
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import {DashItem, DashText, DashPage, DashContent} from '../../styledComponents/DashboardStyles';
import Navbar from '../../Navbar';

class ProgramForm extends React.Component {
  state = { title: "", description: "", image:"", featured_boolean: false, gallery:"" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  componentDidMount() {
     if (this.props.location.state) {
       const { title, description, image, featured_boolean, gallery } = this.props.location.state
       this.setState({ title, description, image, gallery, featured_boolean });
     }
   }

 handleSubmit = (e) => {
   const { title,description, image, gallery, featured_boolean, history } = this.props
   e.preventDefault();
   if (this.props.location.state) {
     const { id } = this.props.location.state
     this.props.updateProgram(id, { ...this.state }, history)
   } else {
     this.props.addProgram(this.state)
     history.push("/admin/programindex")
   }
   this.setState({ title: "", description: "", image:"", gallery:"", featured_boolean:"" });
 };

  render() {
    const { title, description, image, gallery, featured_boolean } = this.state;
    return (
      <>
      <DashPage>
        <Navbar />
        <DashContent>
<h1>Add Program</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.TextArea
          label="Description"
          name="description"
          value={description}
          onChange={this.handleChange}
          type="text"
        />
        <Form.Input
          label="Image Link"
          name="image"
          value={image}
          onChange={this.handleChange}
          type="text"
        />

        <Form.Input
          label="featured_boolean"
          name="featured_boolean"
          value={featured_boolean}
          onChange={this.handleChange}
          type="text"
        />

        <Form.Button color="blue">Save</Form.Button>

        </Form>
        </DashContent>
      </DashPage>
        </>
      )
  }
}

const ConnectedProgramForm = (props) => {
  return (
    <ProgramConsumer>
      { value => (
        <ProgramForm
          { ...props }
          name={value.title}
          description={value.description}
          image={value.image}
          gallery={value.gallery}
          featured_boolean={value.featured_boolean}
          addProgram={value.addProgram}
          updateProgram={value.updateProgram}
        />
      )}
    </ProgramConsumer>
  )
}



export default ConnectedProgramForm;
