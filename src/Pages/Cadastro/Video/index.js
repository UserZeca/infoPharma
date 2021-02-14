import React, { useEffect ,useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';
import { Container, ButtonLink, ContainerBox, ItenBox } from '../styles';

const menuWithButtonLink = false;


function CadastroVideo(){
    const [categorias, setCategorias] = useState([]);              // Hooks específico para categorias     
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
    });

    useEffect(() =>{

      categoriesRepository.getAllWithVideos()
      .then((categoriasFromServer) =>{
        setCategorias(categoriasFromServer);
      });

    },[]);
    
    return (
      <PageDefault menuWithButtonLink={menuWithButtonLink}>
          <Container>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
              event.preventDefault();
              
              const categoriaEscolhida = basicCategoryData.find((categoria) => {                  
                return categoria.titulo === valores.categoria ? categoria : false;
              })

              if(categoriaEscolhida === false){

                 // Tratar o Erro  

                  alert('Erro ao cadastrar video');
              }else{
                  
                 
                  videosRepository.create({
                    id: '',
                    categoriaId: categoriaEscolhida.id ,
                    titulo: valores.titulo,
                    url: valores.url,
                  })
                  .then(() =>{
                    history.push('/');
    
                  })
              }

            }}>
              <FormField
                label="Título do Video"
                value={valores.titulo}
                name="titulo" 
                type="text"
                onChange={ handleDoValorCampo }
              />
              <FormField
                label="URL"
                value={valores.url}
                name="url" 
                type="text"
                onChange={ handleDoValorCampo }
              />

              <FormField
                label="Categoria"
                value={valores.categoria}
                name="categoria" 
                type="text"
                onChange={ handleDoValorCampo }
                suggestions= {categoriaTitles}
              />   
                          
              <ContainerBox> 
                  <ItenBox>  
                     
                    <Button type="submit" 
                      disabled={
                        valores.titulo === '' ||
                        valores.categoria === '' || 
                        valores.url === '' 
                      } 
                    >
                      Cadastrar
                    </Button>

                  </ItenBox>
                  
                  <ItenBox>
                      <ButtonLink to="/"> 
                          Home
                      </ButtonLink>
                      <ButtonLink to="/cadastro/categoria"> 
                          Cadastrar Categoria
                      </ButtonLink>
                  </ItenBox>
              </ContainerBox>

            </form>
            
          
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroVideo;