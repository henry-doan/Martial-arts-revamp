import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ProgramShow extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, updateProgram, deleteProgram, history } = this.props
    return (
      <div >
      <img src={image}/>

        <h1>{title}</h1>
        <h2>{description}</h2>
        <button><Link to={{
          pathname: "/programForm",
          state: { id, title, description, image, gallery, featured_boolean, history }
        }}>Edit Program</Link></button>
        <button onClick = {() => deleteProgram(id)}>delete</button>



      </div>
    )
  }
}

export default ProgramShow;
