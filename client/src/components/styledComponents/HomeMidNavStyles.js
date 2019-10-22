import styled from 'styled-components';

export const HomeMidNavSec = styled.section`
width:100%;
    display: block;
    /* margin: 1rem 0; */
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background:rgba(250,250,250,0.8);
    font-weight: 400;
    border: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    max-height: 8em;
    z-index:5;
    position: sticky;
    top:0;
`;

export const HomeMidNavList = styled.ul`
list-style: none;
overflow: hidden;
`;

export const HomeMidNavItem = styled.li`
  float: left;
  display: block;
`;
export const HomeMidNavItemCen = styled.li`
  /* display: inline; */
`;
export const HomeMidNavItemRight = styled.li`
  float: right;
  display: block;
  padding:2em;
`;

export const HomeMidNavLink = styled.a`
color:black;
text-transform:capitalize;
transition-duration: .3s;
&:hover{
    color:red;
}
`;