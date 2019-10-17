import React from 'react';
import HomeAbout from '../../admin/about/HomeAbout';
import PageNavbar from '../pagesnavbar/PageNavbar';
import Footer from '../footer/Footer';
import {HomeContainer} from '../../styledComponents/HomeStyles';
import {Hero2Cover, Hero2CoverH2} from '../../styledComponents/Home2HeroStyles';
import Home2Hero from '../home/Home2Hero';

const HomeAboutPage = () => (
    <>
    <HomeContainer>
        <PageNavbar />
        <Hero2Cover >
          <Hero2CoverH2>Learn About Us</Hero2CoverH2>
        </Hero2Cover>
      <HomeAbout />
      <Footer/>
    </HomeContainer>
    </>
)

export default HomeAboutPage
