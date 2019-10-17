import React, {Component} from 'react';
import ProgramShow from "../Programs/ProgramShow";
import { ProgramConsumer } from '../../providers/ProgramProvider';
import {Link} from 'react-router-dom';
import ProgramContainer, { Test2, Test3, Test4 } from '../styleComponents/ProgramStyles';

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

              <Link to={{pathname: "/programForm"}}>Add New </Link>
              </div>
        )}


    </ProgramConsumer>


)

export default ProgramIndex;
