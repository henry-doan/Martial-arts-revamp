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