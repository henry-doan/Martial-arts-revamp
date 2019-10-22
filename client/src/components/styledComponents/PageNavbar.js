import styled from 'styled-components';

export const MobNavSec = styled.section`
 @media (max-width: 769px) {
/* MOB */
position: sticky;
z-index:999 !important;
top:0;
}

@media (min-width: 769px) {   
/* DESK */
display:none;
}
`;

export const DesNavSec = styled.section`
 @media (max-width: 769px) {
/* MOB */
display:none;
}

@media (min-width: 769px) {   
/* DESK */
position: sticky;
z-index:999 !important;
top:0;
}
`;