import React from 'react';
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import ProgramLandingShows from "./ProgramLandingShows";
import { Link } from 'react-router-dom';
import './programLandingShows.css'


const ProgramLandingShow = ({programs, history}) => (
    <>
      <ProgramConsumer>
        { value => (
          <div>
            <img className="imgContainer" src="https://images.unsplash.com/photo-1571669972095-cfe604a052f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" width='600' height="500" />
            <div className='descContainer'>
            <h1>Program</h1>
            <p>sdkjfhdsjkfjksfjk</p>
            </div>
            <div class="ui stackable four column grid">
              <div class="column">
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[0].id}`,
                  state: { program: value.featuredPro[0] }
                }}>
                  <img src={ value.featuredPro[0].image } width='150' height='150'/>
                </Link>
              </div>

              <div class="column">
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[1].id}`,
                  state: {program: value.featuredPro[1]}
                }}>
                <img src={ value.featuredPro[1].image } width='150' height='150'/>
                </Link>
              </div>

              <div class="column">
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[2].id}`,
                  state: { program: value.featuredPro[2]}
                }}>
                <img src={ value.featuredPro[2].image } width='150' height='150'/>
                </Link>
              </div>


              <div class="column">
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[3].id}`,
                  state: {program: value.featuredPro[3]}
                }}>
                <img src={ value.featuredPro[3].image } width='150' height='150'/>
                </Link>
              </div>
            </div>
          </div>
      )}
      </ProgramConsumer>
    </>
)

export default ProgramLandingShow;
//
// // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { Grid, Image, Card, Icon, Menu, Segment } from 'semantic-ui-react';
// import { ProgramConsumer } from '../../providers/ProgramProvider';
// import './programLandingShows.css'
//
//
// class ProgramView extends Component {
//     state = { currentProgramIndex: 0}
//
//     onProgramChange = (newIndex) => this.setState({currentProgramIndex: newIndex});
//
//     renderProgramImages = () => {
//       return this.props.featuredPro.map((program) => (
//         <div key={program.id}>
//           <img src={program.image} />
//         </div>
//       ))
//     }
//
//     render() {
//       const program = this.props.featuredPro[this.state.currentProgramIndex];
//         return (
//         <div>
//           <div class="CarWrap">
//             <Carousel onChange={this.onProgramChange} style={{margin: "0px"}} >
//               {this.renderProgramImages()}
//             </Carousel>
//           </div>
//
//             <div>
//             {/* <div style={{display: "flex", justifyContent: "flex-end", margin: "10px"}}> */}
//               {/* <h1>Instructor {insructors[this.state.currentInstructor].name}</h1> */}
//               <section class="instructorContent">
//               <h1> {program && program.title}</h1>
//               <p>{program && program.description}</p>
//
//               </section>
//
//             </div>
//             </div>
//         );
//     }
// };
//
// const ConnectedProgramView = (props) => {
//   return (
//     <ProgramConsumer>
//       { value => (
//         <ProgramView
//           { ...props }
//           featuredPro={value.featuredPro}
//         />
//       )}
//     </ProgramConsumer>
//   )
// }
//
// export default ConnectedProgramView;
