import React, { Component } from 'react';
import axios from 'axios';

export const AboutContext = React.createContext();

export const AboutConsumer = AboutContext.Consumer;

class AboutProvider extends Component {
  state = { abouts: [] }

  componentDidMount() {
    axios.get('/api/abouts')
      .then( res => {
        this.setState({ abouts: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }



  addAbout = (about) => {
    axios.post('/api/abouts', { about})
    .then( res => {
        const { abouts } = this.state
        this.setState({ abouts: [ res.data ] })
    })
    .catch( err => {
        console.log(err)
    })
}


  updateAbout = (id, about) => {
    axios.put(`/api/abouts/${id}`, { about })
      .then( res => {
        const abouts = this.state.abouts.map( t => {
          if (t.id === id)
            return res.data
          return t
        })
        this.setState({ abouts })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <AboutContext.Provider value={{
        abouts: this.state.abouts,
        getAbout: this.getAbout,
        addAbout: this.addAbout,
        updateAbout: this.updateAbout,
      }}>
        { this.props.children }
      </AboutContext.Provider>
    )
  }
}

export default AboutProvider;
