import React from "react";
import VideoBg from "reactjs-videobg";
// import ogg from "./videos/Neon.ogg";
// import webm from "./videos/Neon.webm";
import mp4 from "../assets/videos/Neon.mp4";
import poster from "../assets/images/poster.jpeg";
import {Grid} from 'semantic-ui-react';
import { VideoCoverHero, HeroText, HeroLowerImage} from '../../styledComponents/VideoCoverStyles';

const VideoCover = () => (
    <>
    <VideoCoverHero desktopOnly>
    <HeroText>Bernales Institute of Martial Arts!</HeroText>
    <VideoBg poster={poster} className='desktopOnly'>
    {/* <VideoBg.Source src={ogg} type="video/ogg" /> */}
    {/* <VideoBg.Source src={webm} type="video/webm" /> */}
    <VideoBg.Source src={poster} className="mobile-only" type="image/jpg" />
    <VideoBg.Source src={mp4} type="video/mp4" />
    </VideoBg>
    </VideoCoverHero>

    </>
)

export default VideoCover