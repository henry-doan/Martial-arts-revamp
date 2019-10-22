import styled from 'styled-components';
export const HeroProgramSection = styled.section`
  @media (min-width: 769px) {
    .ui.grid > .row > .column {
  padding: 0 !important;
  width: 100%;
  margin-top: -95px !important;
  position: relative;
  z-index: 1;
  }
}

  @media (max-width: 769px) {
  .ui.grid > .row > .column {
  padding: 0 !important;
  /* margin: 0 !important;
  width: 100%;
  position: relative;
  z-index: 1;  */
  }
}
`;

export const ProgramWrap = styled.section`
position:relative;
opacity: 0.5;
  &:hover{
      opacity: 1;
  }
`;

export const ProgramWrapH3 = styled.h3`
color:white;
font-size:1.5em;
position: absolute;
z-index: 888;
margin: 0 auto;
text-align:center;
bottom: 60%;
left:50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-shadow: 0px 0px 8px #000;
`;

export const PButton = styled.button`
color:black;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
text-decoration:none;
font-size:1em;
position: absolute;
z-index: 888;
margin: 0 auto;
text-align:center;
bottom: 30%;
left:50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);

&:hover{
  font-size:2em;
  border-radius:50px !important;
  color:orange !important;
  }

`;

export const HeroProgramImage = styled.img`
width: 100%;
/* opacity: 0.5;
  &:hover{
      opacity: 1;
  } */
`;

