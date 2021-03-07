import styled from 'styled-components';


export const ProdutoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
 

`;


export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-bottom: 3px solid ${({ borderBottomColor }) => `${borderBottomColor}`};
  border-radius: 4px;
  

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ContainerExtraLink = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) => `${justifyContent}` || 'normal'};
`;


export const ExtraLink = styled.a`

  color: ${({color}) => `${color}`};
  display: flex;
  font-weight: 600;
  cursor: pointer;

  margin: ${({margin}) => `${margin}`};
  transition: opacity .3s;
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
    font-size: 14px;
  }
`;

export const ProdutoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

