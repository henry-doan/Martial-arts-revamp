import React, { Component } from 'react';
import axios from 'axios';

const ProgramContext = React.createContext();

export const ProgramConsumer = ProgramContext.Consumer;

export class ProgramProvider extends Component {

  state = { programs: [] };

  componentDidMount(){
    axios.get('/api/programs')
    .then( res => {
      this.setState({ programs: res.data  })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addProgram = (incomingProgram) => {
    const program = incomingProgram
    axios.post('/api/programs', {program})
    .then(res => {
      const {programs} = this.state
      this.setState({programs: [ ...programs, res.data]})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updateProgram = (id, program) => {
    axios.put(`/api/programs/${id}`, { program})
    .then( res => {
      const programs = this.state.programs.map ( p => {
        if (p.id === id)
          return res.data
        return p
      })
      this.setState({programs})
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteProgram = (id) => {
    axios.delete(`/api/programs/${id}`)
    .then( res => {
      const {programs} = this.state
      this.setState({ programs: programs.filter( p => p.id !== id)})
    })
    .catch (err => {
      console.log(err)
    })
  }

  render() {
    return (
      <ProgramContext.Provider value={{
        ...this.state,	
        addProgram: this.addProgram,	
        updateProgram: this.updateProgram,	
        deleteProgram: this.deleteProgram	
      }}>
        {this.props.children}
      </ProgramContext.Provider>
    )
  }
}

export default ProgramProvider;
