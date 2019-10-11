import React, from 'react';




const ProgramIndex = ({programs, updateProgram, deleteProgram, addProgram, }) => (
  <ProgramConsumer>
    { value => (
        <>
          { value.programs.map(program =>
            <table>
            <thead>
              <th>id</th>
              <th>title</th>
            </thead>

            <tbody>
              <tr>
                <td>{this.props.title}</td>
              </tr>
            </tbody>




            </table>
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
