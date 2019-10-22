addWalkin = (walkin, ) => {
  axios.post(``, {walkincontacts})
    .then( res => {
      const { walkincontacts } = this.state;
      this.setState({ walkincontacts: [...walkincontacts, res.data]})
    })
    .catch( res => {
      console.log(res)
    })
}

// addPage = (page, doc_id) => {
//   axios.post(`/api/documents/${doc_id}/document_pages`, {page})
//     .then( res => {
//       const { pages } = this.state;
//       this.setState({ pages: [...pages, res.data]})
//     })
//     .catch( res => {
//       console.log(res)
//     })
// }


// if(isset($_POST['submit']))
// {
//      $fields = $_POST;
//      if( empty($fields['name']) ) { 
//          die("No name"); 
//      }

//      if( empty($fields['email']) ) { 
//          die("No email"); 
//      }

//      if (!empty( $fields['code'] ) ) {
//            die("ok"); 
//      }

//  }