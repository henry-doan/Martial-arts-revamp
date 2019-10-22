import styled from 'styled-components'
import Hero2 from '../staticpages/assets/images/hero2.jpeg'

export const Hero2Cover = styled.section`

@media (min-width: 769px) {
background: url(${Hero2});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
width: 100%;
min-height: 60vh;
clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0 90%);
position: relative;
z-index:2;
}

@media (max-width: 769px) {
background: url(${Hero2});
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center;
width: 100%;
min-height: 60vh;
/* position: relative;
clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0 90%);
z-index:2;  */

}

`;

export const Hero2CoverH2 = styled.h2`
/* text-align: center; */
font-size: 2rem;
color:white;
margin: 0;
position: absolute;
z-index:5;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-shadow: 0px 0px 8px #000;
@media (max-width: 769px) {
    display:none;
}
`