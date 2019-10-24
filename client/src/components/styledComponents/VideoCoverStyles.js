import styled from 'styled-components';
import HomeHero from '../staticpages/assets/images/home-hero.jpeg'

export const VideoCoverHero = styled.section`

 @media (max-width: 769px) {
    min-height: 100vh;
    background: url(${HomeHero});
    position:relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (min-width: 769px) {   
    min-height: 100vh;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0 90%);
    background: #1c1c1c;
    position: relative;
    z-index:2;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`;

export const VideoCoverLogo = styled.img`

 @media (max-width: 769px) {
width:100%;
}

@media (min-width: 769px) {   
width:100%
}
`;

export const HeroText = styled.h1`
    @media (max-width: 769px) {
        font-size: 2rem;
    }
    font-size: 4rem;
    text-align: center;
    color:white;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: 0px 0px 8px #000;
`;
