import React, { Component } from 'react';
import axios from 'axios';

const AboutContext = React.createContext();

export const AboutConsumer = AboutContext.Consumer;

class AboutProvider extends Component {
  state = { abouts: [],
    addItem: (incommingAbout) => this.addItem(incommingAbout),
    updateAbout: (id, title, content) => this.updateAbout(id, title, content),
    // deletefunction here
  }

  componentDidMount() {
    axios.get('/api/abouts')
      .then( res => {
        this.setState({ abouts: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  updateAbout = (id, title, content) => {
    axios.put(`/api/abouts/${id}`, { title, content })
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
      <AboutContext.Provider value={this.state}>
        { this.props.children }
      </AboutContext.Provider>
    )
  }
}

export default AboutProvider;