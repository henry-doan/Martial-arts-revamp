import styled from 'styled-components';
import mapBG from '../../components/staticpages/assets/images/mapbg.jpg';

export const MapBack = styled.section`
border: 1px solid #000;
background-image: url(${mapBG});
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
height: 60vh;
position: relative;
`;

export const MapCard = styled.section`
 @media (max-width: 769px) {
position: relative;
margin: auto; 
padding: 10px;
margin-top:3em;
width: 85%;
color: white;
background-color: #1c1c1c;
}

@media (min-width: 769px) {
position: absolute; left: 0; bottom: 0;
padding: 10px;
width: 60%;
color: white;
background-color: #1c1c1c;
}
`;