import styled from 'styled-components';

export const DashItem = styled.section`
width:200px;
height:200px;
border-radius:5px;
margin:2em;
position: relative;
`;

export const DashText = styled.a`
position: absolute;
font-size:1.5em;
top:50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
text-shadow: 0px 0px 8px #000;
color:white;
margin:auto;
`;

export const DashPage = styled.section`
height:100vh;
background-color:#eeeeee;
`;

export const DashContent = styled.section`
padding: 2em;
`;