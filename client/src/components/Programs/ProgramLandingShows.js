import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './programLandingShows.css'

class ProgramLandingShows extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, body } = this.props.location.state.program
    return (
      <>
        <div className="showContainer" >
          <div className="imgContainer">
            <img className='img1' src={image}></img>
          </div>
        <div className="descContainer">
          <h1>{ title }</h1>
          <p>{ description }</p>
        </div>
        <br />
        </div>
        <Container>
          {body}
        </Container>
      </>
    )
  }
}

export default ProgramLandingShows;
