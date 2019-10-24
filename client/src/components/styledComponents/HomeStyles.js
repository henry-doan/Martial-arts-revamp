import styled from 'styled-components'

export const HomeContainer = styled.section`
background-color: #1c1c1c;
color: white;
margin: 0 !important;
padding: 0 !important;
position: relative;
height:auto;

    @media (max-width: 767px){   

    .ui.grid {
    margin-top: 0rem;
    margin-bottom: 0rem;
    }

    .ui.doubling.grid>.row>.column {
    padding-top: 0rem !important; 
    padding-bottom: 0rem !important; 
    }

}

`;

export const PageContainer = styled.section`
background-color: #1c1c1c;
color: white;
margin: 0em !important;
padding: 0em !important;
position: relative;
height:auto;

    @media (max-width: 767px){   
        /* MOBILE OVERIDE */

}
`;

export const PageWrap = styled.section`
padding: 2em !important;
}
`;

export const Horizontal = styled.hr`
margin-top:2em;
margin-bottom:2em;
`;
