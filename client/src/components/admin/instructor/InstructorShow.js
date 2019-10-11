import React, { Component } from 'react';
import { Header, Segment, Button, Icon, Checkbox, Table, Modal } from 'semantic-ui-react';
import ConnectedInstructorForm from './InstructorForm';
import {InstructorConsumer} from '../../../providers/InstructorProvider';
import {Link} from 'react-router-dom';

class InstructorShow extends Component {

 state = { editing: false }

//  componentDidMount(){
//      console.log(this.props)
//  }

 toggleEdit = () => this.setState({ editing: !this.state.editing })

 render () {
   const { id,first_name, last_name, specialty, years, experience, sm_facebook,
     sm_linkedin, sm_instagram, sm_youtube, addInstructor, updateInstructor, deleteInstructor } = this.props
   const { editing } = this.state
   return (
       <>
            <Table.Row>
                <Table.Cell><h1>{first_name}</h1></Table.Cell>
                <Table.Cell>{last_name}</Table.Cell>
                <Table.Cell>{specialty}</Table.Cell>

                <Table.Cell>
                <Modal trigger={<Button>Instructor Details</Button>} closeIcon>
                <Modal.Content>
                <Segment style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            }}>
            {
                editing ?
                    <ConnectedInstructorForm
                    { ...this.props }
                    updateInstructor={ this.props.update }
                    toggleEdit={this.toggleEdit}
                    />
                :
                    <>
                    <Header>{first_name}</Header>

                    </>
            }
            </Segment>
            </Modal.Content>

            <Modal.Actions>
            <Button icon color='blue' onClick={this.toggleEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button icon color='red' onClick={() => deleteInstructor(id)}>
                        <Icon name="trash" />
                    </Button>
            </Modal.Actions>

                </Modal>
                    {/* <Button icon color='blue' onClick={this.toggleEdit}>
                        <Icon name="pencil" />
                    </Button>
                    <Button icon color='red' onClick={() => deleteInstructor(id)}>
                        <Icon name="trash" />
                    </Button> */}
            </Table.Cell>
            </Table.Row>

           
    </>
   )
 }
}

const ConnectedInstructorShow = (props) => {
    return (
      <InstructorConsumer>
        { value => (
          <InstructorShow
            { ...props }
            { ...value }
          />
        )}
      </InstructorConsumer>
    )
  }

export default ConnectedInstructorShow;
