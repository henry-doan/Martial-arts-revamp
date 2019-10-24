import React, { Component } from 'react';
import axios from 'axios';

export const InstructorContext = React.createContext();
export const InstructorConsumer = InstructorContext.Consumer;

class InstructorProvider extends Component {
    state = { instructors: [] }

componentDidMount() {
    axios.get('/api/instructors')
    .then( res => {
        this.setState({ instructors: res.data })
    })
    .catch( err => {
        console.log(err)
    })
}

addInstructor = (instructor) => {
    axios.post('/api/instructors', {instructor})
    .then( res => {
        const { instructors } = this.state
        this.setState({ instructors: [...instructors, res.data] })
    })
    .catch( err => {
        console.log(err)
    })
}

updateInstructor = (id, instructor) => {
    axios.put(`/api/instructors/${id}`, { instructor } )
    .then( res => {
        const instructors = this.state.instructors.map( i => {
            if (i.id === id)
                return res.data
            return i
        })
        this.setState({ instructors })
    })
    .catch( err => {
        console.log(err)
      })
  }

  deleteInstructor = (id) => {
      axios.delete(`/api/instructors/${id}`)
      .then( res => {
          const { instructors } = this.state
          this.setState({ instructor: instructors.filter( i => i.id !== id) })
          this.componentDidMount();
      })
      .catch (err => {
        console.log(err)
      })
  }

render() {
    return(
        <InstructorContext.Provider value={{
            instructors: this.state.instructors,
            getInstructor: this.getInstructor,
            addInstructor: this.addInstructor,
            updateInstructor: this.updateInstructor,
            deleteInstructor: this.deleteInstructor
        }}>
        {this.props.children}
        </InstructorContext.Provider>
    )
}
}

export default InstructorProvider;