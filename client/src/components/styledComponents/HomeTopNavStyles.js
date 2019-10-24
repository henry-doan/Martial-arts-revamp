import styled from 'styled-components';

export const HomeTopNavSec = styled.section`
    width:100%;
    display: block;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background:rgba(28,28,28,0.5);
    font-weight: 400;
    border: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    max-height: 8em;
    z-index:3;
    position: sticky;
    top:0;
    @media (max-width: 769px) {   
display:none;
}
`;

export const HomeTopNavLink = styled.a`
color:white;
text-transform:capitalize;
transition-duration: .3s;
&:hover{
    color:red;
}
`;