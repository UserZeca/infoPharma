import React from 'react';
import { ProdutoCardGroupContainer, Title, ExtraLink } from './styles';
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
  const produtos = category.produtos;

 
  return (
    <ProdutoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }} borderBottomColor={`${ConvertStringToHex(categoryColor)}`}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {produtos.map((produto, index) => {
            console.log(produto.preco);

            if ((ignoreFirstProduto && index === 0) ) {
                return null;
            }

            if( index < 10){
                return (
                    <SliderItem key={produto.nome}>
                        <ProdutoCard
                            produtoTitle={produto.nome}
                            produtoURL={produto.url}
                            categoryColor={categoryColor}
                            produtoPreco={`R$ ${produto.preco}`}
                        />
                    </SliderItem>
                );
            }
        })}
      </Slider>
    </ProdutoCardGroupContainer>
  );
}

export default Carroussel;
