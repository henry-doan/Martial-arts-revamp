import React, { Component } from 'react';
import axios from 'axios';

const WalkinContext = React.createContext();

export const WalkinConsumer = WalkinContext.Consumer;

class WalkinProvider extends Component {
  state = { walkins: [],
  }

  componentDidMount() {
    axios.get('/api/walkincontacts')
      .then( res => {
        this.setState({ walkins: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addWalkin = (incommingWalkin) => {
    const walkin = incommingWalkin
    axios.post('/api/walkincontacts', { walkin })
      .then( res => {
        const { walkins } = this.state
        this.setState({ walkins: [ ...walkins, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateWalkin = (id, walkin) => {
    axios.put(`/api/walkincontacts/${id}`, { walkin })
      .then( res => {
        const walkins = this.state.walkins.map( t => {
          if (t.id === id)
            return res.data
          return t
        })
        this.setState({ walkins })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteWalkin = (id) => {
    axios.delete(`/api/walkincontacts/${id}`)
      .then( res => {
        const { walkins } = this.state
        this.setState({ walkins: walkins.filter( t => t.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <WalkinContext.Provider value={{
        ...this.state,
        addWalkin: this.addWalkin,
        updateWalkin: this.updateWalkin,
        deleteWalkin: this.deleteWalkin
      }}>
        { this.props.children }  
      </WalkinContext.Provider>
    )
  }
}

export default WalkinProvider;