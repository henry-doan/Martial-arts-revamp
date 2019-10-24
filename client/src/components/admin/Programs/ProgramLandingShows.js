import React, { Component } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { Container } from './node_modules/semantic-ui-react';
import {ProgramImage} from '../../styledComponents/ProgramIndexStyles';
import {Grid, Image, Button, Header} from './node_modules/semantic-ui-react';
import {PageContainer, PageWrap} from '../../styledComponents/HomeStyles';
import Footer from '../../staticpages/footer/Footer';

import PageNavbar from '../../staticpages/pagesnavbar/PageNavbar';

class ProgramLandingShows extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, body } = this.props.location.state.program
    return (
    <>
      <PageNavbar/>
        <PageContainer>
          <PageWrap>
          {/* <h1>{ title }</h1> */}
            <Grid columns={2} doubling>
              <Grid.Row>
                <Grid.Column>
                  <Image src={image}/>
                </Grid.Column>

                <Grid.Column>
                <p>{ description }</p>
                <h1>{ title }</h1>
                </Grid.Column>

              </Grid.Row>
            </Grid>

{/* <Button>
      <Link to='/programs'>All Programs</Link>
</Button> */}

          </PageWrap>
        </PageContainer>
      <Footer/>
    </>
    )
  }
}

export default ProgramLandingShows;
