import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from 'semantic-ui-react';

class ProgramShow extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, updateProgram, deleteProgram, history } = this.props
    return (
    <>
    <Table.Row>
    <Table.Cell>{title}</Table.Cell>
    <Table.Cell textAlign='right'>
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
