
addContact = (contact, ) => {
  axios.post(``, {contact})
    .then( res => {
      const { contacts } = this.state;
      this.setState({ contacts: [...contacts, res.data]})
    })
    .catch( res => {
      console.log(res)
    })
}