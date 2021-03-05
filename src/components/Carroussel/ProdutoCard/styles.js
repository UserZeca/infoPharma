import styled from 'styled-components';


export const ProdutoCardContainer = styled.div`

  width: 298px;
  height: 300px;
  padding-top: 5px;
  color: var(--black);
  font-weight: 600;
  
`;

export const Card = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
 
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;


  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const CardInfo = styled.div`
    margin: 20px;
`;

export const ContainerCardMiniBox = styled.div`

  display: flex;
  justify-content: ${({justifyContent}) => `${justifyContent}`};
  


`

export const CardMiniBox = styled.div`

    background-color: ${({ color }) => `${color}`};
    bottom: ${({ bottom }) => `${bottom}`};
    position: fixed;
    width: 85px;
    
    color: white;
    height: 25px;
    display: flex;
    justify-content: ${({justifyContent}) => `${justifyContent}`};
    border-radius: 4px;
    padding: 4px;
    margin-left: 20px;
    margin-right: 20px;
    


`;


