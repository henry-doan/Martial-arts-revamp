import styled from 'styled-components';
import Poster from '../staticpages/assets/images/poster.jpeg'

export const HeroLowerImage = styled.section`
/* mobile */
 @media (max-width: 769px) {
  .ui.grid > .row > .column {
  padding: 0 !important;
  width: 100%;
}
}
 @media (min-width: 769px) {
    .ui.grid > .row > .column {
    padding: 0 !important;
    width: 100%;
    position:relative;
    height:auto;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -95px !important;
    position: relative;
    z-index: 1;
  }
}
`;



export const HeroImageItem = styled.img`
  @media (min-width: 769px) {
    opacity: 0.5;
    position:relative;
    height:auto;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
  @media (max-width: 769px) {
     opacity: 0.5;
     height:100;
     position:relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`;
