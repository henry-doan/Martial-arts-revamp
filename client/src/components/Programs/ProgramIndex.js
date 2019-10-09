import React, {Component} from 'react';
import ProgramShow from "../Programs/ProgramShow";
import { ProgramConsumer } from '../../providers/ProgramProvider';
import {Link} from 'react-router-dom';

const ProgramIndex = ({programs, updateProgram, deleteProgram, addProgram, }) => (
  <ProgramConsumer>
    { value => (
        <>
          { value.programs.map(program =>
            <ProgramShow
              key={program.id}
              {...program}
              updateProgram={value.updateProgram}
              deleteProgram={value.deleteProgram}
            />
          )}
          <Link to="/programForm">Add new Program</Link>
        </>
      )}
  </ProgramConsumer>
)

export default ProgramIndex;
