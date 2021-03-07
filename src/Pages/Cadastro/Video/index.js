import React, { useEffect ,useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import produtosRepository from '../../../repositories/produtos';
import categoriesRepository from '../../../repositories/categorias';
import { Container, ButtonLink, ContainerBox, ItenBox } from '../styles';

const menuWithButtonLink = false;


function CadastroVideo(){
    const [categorias, setCategorias] = useState([]);              // Hooks específico para categorias     
    const [checked, setChecked] = useState(false);                // Hooks específico para checkbox
  
    const history = useHistory();                                  // useHistory é um hooks específico pra rotas     
    const categoriaTitles = categorias.map(({titulo}) => titulo);

    const basicCategoryData = categorias.map(({titulo, id}) => {
      return {titulo,id}
    }  
    );
    
    const { handleDoValorCampo , valores} = useForm({
      titulo: '',
      url: '',
      categoria: '',
      preco: '',
      subcategoria: '',
  
    });
    
    
    useEffect(() =>{

      categoriesRepository.getAllWithProdutos()
      .then((categoriasFromServer) =>{
        setCategorias(categoriasFromServer);
      });

    },[]);
    
    return (
      <PageDefault menuWithButtonLink={menuWithButtonLink}>
          <Container>
            <h1>Cadastro de Produto</h1>

            <form onSubmit={(event) => {
              event.preventDefault();
              
              const categoriaEscolhida = basicCategoryData.find((categoria) => {                  
                return categoria.titulo === valores.categoria ? categoria : false;
              })

              if(categoriaEscolhida === false){

                 // Tratar o Erro  

                  alert('Erro ao cadastrar video');
              }else{



                  
                  let produto = {
                    categoriaId: categoriaEscolhida.id ,
                    nome: valores.titulo,
                    url: valores.url,
                    preco: valores.preco,
                    subcategoria: valores.subcategoria,
                    emPromocao: checked
                  }
                  
                  //setTimeout((produto)=>{console.log(`Testando envio de produtos... ${produto}`)}, 1000);            
                  console.log('GIGA TESTEEEE \n\n\n\n');
                  console.log(produto);

                 
                  produtosRepository.create(produto)
                  .then(() =>{
                    history.push('/');
    
                  })
              }

            }}>
              <FormField
                label="*Nome do Produto"
                value={valores.titulo}
                name="titulo" 
                type="text"
                onChange={ handleDoValorCampo }
              />
              <FormField
                label="*URL"
                value={valores.url}
                name="url" 
                type="text"
                onChange={ handleDoValorCampo }
              />

              <FormField
                label="*Preço"
                value={valores.preco}
                name="preco" 
                type="number"
                onChange={ handleDoValorCampo }
              />

              <FormField
                label="Sub-categoria"
                value={valores.subcategoria}
                name="subcategoria" 
                type="text"
                onChange={ handleDoValorCampo }
              />   

              <FormField
                label="*Categoria"
                value={valores.categoria}
                name="categoria" 
                type="text"
                onChange={ handleDoValorCampo }
                suggestions= {categoriaTitles}
              />   

            <FormField 
                id='Checkbox'
                label='Produto em Promoção'
                value= {valores.emPromocao}
                name='Produto em Promoção'
                type='checkbox'
                onChange={() => setChecked(!checked)}       
              />

            
                          
              <ContainerBox> 

                  <ItenBox>
                      <ButtonLink to="/"> 
                          Home
                      </ButtonLink>
                      <ButtonLink to="/cadastro/categoria"> 
                          Cadastrar Categoria
                      </ButtonLink>
                  </ItenBox>

                  <ItenBox>  
                     
                    <Button type="submit" 
                      disabled={
                        valores.titulo === '' ||
                        valores.categoria === '' || 
                        valores.url === '' || 
                        valores.preco === '' ||
                        valores.subcategoria === ''
                      } 
                    >
                      Cadastrar
                    </Button>

                  </ItenBox>
                  
                 
              </ContainerBox>

            </form>
            
          
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroVideo;