import React, {Component} from 'react';
import ProgramShow from "./ProgramShow";
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import {Link} from 'react-router-dom';

const ProgramIndex = ({programs, updateProgram, deleteProgram, addProgram, history }) => (

  <ProgramConsumer>

        { value => (
            <div>
            { value.programs.map(program =>
                <div>


                <ProgramShow
                  {...program}
                  updateProgram={value.updateProgram}
                  deleteProgram={value.deleteProgram}
                  />

              </div>

              )}

              <Link to={{pathname: "/admin/programForm"}}>Add New </Link>
              </div>

        )}
    </ProgramConsumer>
)

export default ProgramIndex;
