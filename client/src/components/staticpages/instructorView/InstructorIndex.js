import React, {useEffect, useContext, useState} from 'react';
import { InstructorContext } from '../../../providers/InstructorProvider';
import { Link } from 'react-router-dom';
import {PageContainer, PageWrap, Horizontal} from '../../styledComponents/HomeStyles';
import Footer from '../../staticpages/footer/Footer';
import PageNavbar from '../../staticpages/pagesnavbar/PageNavbar';
import { Tab, Menu, Button, Icon, Grid, Image } from 'semantic-ui-react';
import {Hero2Cover} from '../../styledComponents/Home2HeroStyles';
import {InstructorImage, InstructorImageSecDesk} from '../../styledComponents/InstructorIndexStyles';
import ConnectedInstructorPage from './InstructorPage';
import ConnectedInstructorHero from './InstructorHero';


const InstructorIndex = () => {
  const value = useContext(InstructorContext);
  const [currentInstructor, setCurrentInstructor] = useState(value.instructors[0]); 
  
  return (
  <>
    <PageNavbar />
    <PageContainer>
    <PageWrap>

      <Grid columns={2} doubling>
      <Grid.Row>
      <Grid.Column>
      <ConnectedInstructorHero {...currentInstructor}/>
      </Grid.Column>

      <Grid.Column>
      { value.instructors.map(instructor =>
      <>
      <InstructorImageSecDesk 
      key={instructor.id} > 
      <InstructorImage src={instructor.image} onClick={() => setCurrentInstructor(instructor)} />
      </InstructorImageSecDesk>

      </>
      )} 

      <ConnectedInstructorPage {...currentInstructor}/>
      </Grid.Column>
      </Grid.Row>
      </Grid>

    </PageWrap>
    </PageContainer>
    <Footer />
    </>
  )
  }

  export default InstructorIndex;
