import React, {Component} from 'react';
import ProgramShow from "./ProgramShow";
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import {Link} from 'react-router-dom';

const ProgramIndex = ({programs, updateProgram, deleteProgram, addProgram, history }) => (
  <ProgramConsumer>
    { value => (
        <>
          { value.programs.map(program =>
            <ProgramShow

              {...program}
              updateProgram={value.updateProgram}
              deleteProgram={value.deleteProgram}
            />
          )}
          <Link to="/admin/programForm">Add new Program</Link>
        </>
      )}
  </ProgramConsumer>
)

export default ProgramIndex;
