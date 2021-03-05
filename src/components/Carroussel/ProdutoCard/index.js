import React from 'react';
import { ProdutoCardContainer, Card, CardInfo, CardMiniBox, ContainerCardMiniBox} from './styles';
import ConvertStringToHex from '../utilitario';


function ProdutoCard({ produtoTitle, produtoURL, categoryColor, produtoPreco }) {
  const image = `${process.env.PUBLIC_URL}/img/img_medicamento.jpg`;


  let color = ConvertStringToHex(categoryColor);



  return (
    <ProdutoCardContainer>
     <Card
        src={image}
        href={produtoURL}
        target="_blank"
        style={{ borderColor:  color || 'red' }}
        title={produtoTitle}
      />
      <CardInfo>
        {produtoTitle}
      </CardInfo>
      
      <ContainerCardMiniBox justifyContent="flex-end">
        <CardMiniBox color={color} bottom="0" justifyContent="center">
              {produtoPreco}
        </CardMiniBox>
      </ContainerCardMiniBox>


    </ProdutoCardContainer>
  );
}

export default ProdutoCard;
