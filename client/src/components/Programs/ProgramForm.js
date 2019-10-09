import React from "react";
import { Form, } from "semantic-ui-react";
import { ProgramConsumer } from '../../providers/ProgramProvider';

class ProgramForm extends React.Component {
  state = { title: "", description: "", image:"", featured_boolean: false, gallery:"" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const program = { ...this.state, };
  //   this.props.addProgram(program);
  //   // this.props.updateProgram({program});
  // }

  componentDidMount() {
     if (this.props.location.state) {
       const {id, title, description, image, featured_boolean, gallery } = this.props.location.state
       this.setState({ id, title, description, image, gallery, featured_boolean });
     }
   }

 handleSubmit = (e) => {
   const {title,description, image, gallery} = this.props
   e.preventDefault();
   if (this.props.location.state) {
     const { id } = this.props.location.state
     this.props.updateProgram(id, { ...this.state })

   } else {
     this.props.addProgram(this.state);
   }
   this.setState({ title: "", description: "", image:"", gallery:"" });
 }

  render() {
    const { title, description, image, gallery } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Description"
          name="description"
          value={description}
          onChange={this.handleChange}
          type="text"
        />
        <Form.Input
          label="Image"
          name="image"
          value={image}
          onChange={this.handleChange}
          type="text"
        />

        <Form.Input
          label="gallery"
          name="gallery"
          value={gallery}
          onChange={this.handleChange}
          type="text"
        />

        <Form.Button color="blue">Save</Form.Button>

        </Form>
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
