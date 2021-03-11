import React from 'react';
import { ProdutoCardGroupContainer, Title, ExtraLink,ContainerExtraLink  } from './styles';
import Slider, { SliderItem } from './Slider';
import ProdutoCard from './ProdutoCard'
import ConvertStringToHex from './utilitario';





function Carroussel({
  ignoreFirstProduto,
  category,
}) {
  
  
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.url;
  const categoryTextoLink = category.text;
  const produtos = category.produtos;


  return (
    <ProdutoCardGroupContainer>
      {categoryTitle && (
        <>
          <ExtraLink href={categoryExtraLink} target="_blank">
            <Title style={{ backgroundColor: categoryColor || 'red' }} borderBottomColor={`${ConvertStringToHex(categoryColor)}`}>
             
                {categoryTitle}

            </Title>
          </ExtraLink>
          
        </>
      )}
      <Slider>
        {produtos.map((produto, index) => {
            console.log(produto.preco);

            if ((ignoreFirstProduto && index === 0) ) {
                return null;
            }

           
                return (
                    <SliderItem key={produto.nome}>
                        <ProdutoCard
                            produtoTitle={produto.nome}
                            produtoURL={produto.url}
                            categoryColor={categoryColor}
                            categoryTitle={categoryTitle}
                            produtoPreco={`R$ ${produto.preco}`}
                        />
                    </SliderItem>
                );
        })}
      </Slider>
         

            {categoryTextoLink && (
                <ContainerExtraLink justifyContent="flex-end">
                  <ExtraLink href={categoryExtraLink} target="_blank" margin="30px 10px 0px 0px" color="black" >
                      {categoryTextoLink}
                  </ExtraLink>
                </ContainerExtraLink>
              )
            }
          
      </ProdutoCardGroupContainer>
  );
}

export default Carroussel;
