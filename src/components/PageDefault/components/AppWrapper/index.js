import styled from 'styled-components';


// Container que agrupa toda a view da Aplicacão
const AppWrapper = styled.div`
  background: var(--grayDark);
  color:white;
  padding-top: 94px;

  @media(max-width: 800px){

    padding-top: 40px;

  }

`;

export default AppWrapper;