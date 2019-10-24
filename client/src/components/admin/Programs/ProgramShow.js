import React, {Component} from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from './node_modules/semantic-ui-react';

class ProgramShow extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, updateProgram, deleteProgram, history } = this.props
    return (
    <>
    <Table.Row>
    <Table.Cell><h1>{id}</h1></Table.Cell>
    <Table.Cell>{title}</Table.Cell>
    <Table.Cell>{description}</Table.Cell>
    <Table.Cell>
    <Button >
      <Link to={{
      pathname: "/admin/programForm",
      state: { id, title, description, image, gallery, featured_boolean, history }
      }}>Edit Program</Link>
    </Button>
      <Button color='red' onClick = {() => deleteProgram(id)}>Delete</Button>
    </Table.Cell>
    </Table.Row>
    </>
    )
  }
}

export default ProgramShow;
