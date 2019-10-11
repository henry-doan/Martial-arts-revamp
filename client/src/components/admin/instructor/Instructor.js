import React, {useEffect, useContext} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {InstructorContext} from '../../../providers/InstructorProvider';
import ConnectedInstructorShow from '../instructor/InstructorShow.js';

// import { AboutConsumer } from '../../../providers/AboutProvider';

const Instructor = () => {
    const value = useContext(InstructorContext);

    useEffect( () => {
        {value.getInstructor()}
     },[]);

    return (
    <>
            <Table 
            >
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Specialty</Table.HeaderCell>
                <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {value.getInstructor()}
            { value.instructors.map(instructor =>
            
            <ConnectedInstructorShow 
            key={instructor.id}
            {...instructor}
            updateInstructor={value.updateInstructor}
            deleteInstructor={value.deleteInstructor}
            />
            )}
            </Table.Body>

                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                    <Button
                        floated='right'
                        icon
                        labelPosition='left'
                        primary
                        size='small'
                    >
                        <Icon name='user' /> 
                        <Link to='/instructorform'>Add Instructor</Link>
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
                </Table>
            </>
    )

}


export default Instructor;