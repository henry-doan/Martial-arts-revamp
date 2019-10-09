import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProgramShow extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, updateProgram, deleteProgram } = this.props
    return (
      <div>
        <h1>id: {id}<br />
        Title: {title}<br />
        Description: {description}<br />
        <Link to={{
          pathname: "/programForm",
          state: { id, title, description, image, gallery, featured_boolean }
        }}>Edit Program</Link>
        <button onClick = {() => deleteProgram(id)}>delete</button>
        </h1>
        <br />
      </div>
    )
  }
}

export default ProgramShow;
