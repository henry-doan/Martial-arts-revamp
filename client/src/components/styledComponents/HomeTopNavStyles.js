import styled from 'styled-components';

export const HomeTopNavSec = styled.section`
    width:100%;
    display: block;
    /* margin: 1rem 0; */
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    background:rgba(28,28,28,0.5);
    font-weight: 400;
    border: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    max-height: 8em;
    z-index:3;
    position: sticky;
    top:0;
`;

export const HomeTopNavList = styled.ul`
list-style: none;
overflow: hidden;
`;

export const HomeTopNavLink = styled.a`
color:white;
text-transform:capitalize;
transition-duration: .3s;
&:hover{
    color:red;
}
`;

export const HomeTopNavItem = styled.li`
  float: left;
  display: block;
`;
export const HomeTopNavItemRight = styled.li`
  float: right;
  display: block;
  padding:2em;
`;
