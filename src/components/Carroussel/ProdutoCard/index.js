import React from 'react';
import { ProdutoCardContainer, Card, CardInfo, CardMiniBox, ContainerCardMiniBox} from './styles';
import ConvertStringToHex from '../utilitario';


function ProdutoCard({ produtoTitle, produtoURL, categoryColor, categoryTitle, produtoPreco }) {
  let image;

  console.log('Titulo do produto');
  console.log(categoryTitle);

  switch (categoryTitle) {

    case "Medicamentos":

      image = `${process.env.PUBLIC_URL}/img/img_medicamento.jpg`;

    break;

    case "Dermocosmeticos":

      image = `${process.env.PUBLIC_URL}/img/img_dermocosmetico.jpg`;

    break;

    case "Perfumaria":

      image = `${process.env.PUBLIC_URL}/img/img_perfumaria.png`;

    break;

    case "Saúde Bucal":
      image = `${process.env.PUBLIC_URL}/img/img_saudeBucal.png`;
    break;

    default:
      image = `${process.env.PUBLIC_URL}/img/default.png`;
    break;

  }




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
