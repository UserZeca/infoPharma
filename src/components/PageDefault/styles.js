import styled from 'styled-components';

export const Main = styled.main`
    background: var(--background-main);
    color:white;
    padding-top: 0px;
    flex: 1;

    @media(max-width: 800px){

        padding-top: 0px;

    }

    @media (max-width: 1024px) {
        padding: 0px;
    }
    
`;
