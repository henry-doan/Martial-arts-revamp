import React, {useEffect, useContext, useState} from 'react';
import { Grid, Header, Card, Image } from 'semantic-ui-react';
import { AboutContext } from '../../../providers/AboutProvider';
import {AboutHead, AboutWrap, AboutText, Hero2CoverH2} from '../../styledComponents/AboutPageStyles';
import parse from 'html-react-parser';
import ConnectedAboutForm from './AboutForm';
import Navbar from '../../Navbar';


const HomeAbout = () => {

  const value = useContext(AboutContext);
  const { title, content } = value.abouts[0] || {};

   return(
    <>
    <AboutWrap>
    <AboutHead>The Bernales Institute (BIMA)</AboutHead>
    <Grid doubling columns={2}>
    <Grid.Column>
    <Image src={title}/>
    </Grid.Column>
    <Grid.Column>
      <AboutText>
      <div dangerouslySetInnerHTML={{__html: content}} />
      </AboutText>

    </Grid.Column>
    </Grid>
    </AboutWrap>
    </>
   )

}

export default HomeAbout;