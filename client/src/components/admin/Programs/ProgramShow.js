import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProgramShow extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, updateProgram, deleteProgram, history } = this.props
    return (
      <div>
        <h1>id: {id}<br />
        Title: {title}<br /></h1>
        Description: {description}<br />
        <Link to={{
          pathname: "/admin/programForm",
          state: { id, title, description, image, gallery, featured_boolean, history }
        }}>Edit Program</Link>
        <button onClick = {() => deleteProgram(id)}>delete</button>
      </div>
    )
  }
}

export default ProgramShow;
