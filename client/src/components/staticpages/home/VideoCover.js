import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "../assets/videos/Bima.mp4";
import WlogoS from '../assets/images/WlogoS.png'
import poster from "../assets/images/poster.jpeg";
import { VideoCoverHero, HeroText, VideoCoverLogo} from '../../styledComponents/VideoCoverStyles';

const VideoCover = () => (
    <>
    <VideoCoverHero desktopOnly>
    <HeroText>
    <VideoCoverLogo src={WlogoS}></VideoCoverLogo>
    Bernales Institute of Martial Arts!</HeroText>
    <VideoBg poster={poster} className='desktopOnly'>
    <VideoBg.Source src={poster} className="mobile-only" type="image/jpg" />
    <VideoBg.Source src={mp4} type="video/mp4" />
    </VideoBg>
    </VideoCoverHero>
    </>
)

export default VideoCover