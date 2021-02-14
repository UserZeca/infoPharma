import React , { useState ,useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import useForm from '../../../hooks'
import categoriesRepository from '../../../repositories/categorias'
import { Container, ContainerBox, ItenBox, ButtonLink, ContainerList, ItemList } from '../styles'


const menuWithButtonLink = false;

function CadastroCategoria(){
    
    const [categorias, setCategorias] = useState([]);  // Hooks específico para categorias
    
    const history = useHistory();                     // useHistory é um hooks específico pra rotas                      

    const [checked, setChecked] = useState(false);     // Hooks específico para checkbox

    const valoresIniciais = {       // <- Objeto que armazena valores iniciais para o formulário
        titulo: '',
        descricao: '',
        cor: '#000',
        textLinkExtra: '',
        url: '',
    }

    
    const { valores ,handleDoValorCampo, clearForm} = useForm(valoresIniciais);     // Contruindo Hooks de formulário
    
    // Obtendo as categorias que estão armazenadas no Servidor(na Heroku ou no servidor local)
    useEffect(() => {
 
        categoriesRepository.getAll().then( (respostaDoServidor) => {
            setCategorias([
                ...respostaDoServidor,
            ])
            console.log(respostaDoServidor);
        }).catch((err) =>{
            // Mostrar erro ao usuário ( Tratar o erro)
            console.log(err);
            alert('Não foi possível concluir ação!');
        })

    },[]);


    return (
      <PageDefault menuWithButtonLink={menuWithButtonLink}>
          <Container>
            <h1>Cadastro de Categoria: {valores.titulo} </h1>
            
                <form  onSubmit={ function handlerSubmit(info){
                    info.preventDefault();
                    
                    
                    if(checked === false){
                        valores.textLinkExtra = '';
                        valores.url = '';
                    }

                 
                    const searchCategoria =  categorias.find((categoria) =>{
                        return categoria.titulo === valores.titulo;
                    }) 

                    
                    if(searchCategoria === undefined){
                        
                        setCategorias([
                            ...categorias,
                            valores
                        ]);

                        categoriesRepository.create({
                            id: '',
                            titulo: valores.titulo,
                            cor: valores.cor,
                            link_extra: {
                                text: valores.textLinkExtra,
                                url: valores.url
                              }
                          })
                          .then(() =>{
                            history.push('/');
                            clearForm(valoresIniciais);
                          })
                        
                    }else{
                        
                        alert('Essa categoria já exite');
                        clearForm(valoresIniciais);
                    
                    }
                    
                } }> 

                
                    <FormField
                     label='Nome da Categoria:' 
                     value={valores.titulo} 
                     name='titulo' 
                     type='text'
                     onChange={ handleDoValorCampo }
                     />
                     
                    <FormField
                     label='Descrição:'
                     value={valores.descricao}
                     name='descricao' 
                     type='textarea'
                     onChange={ handleDoValorCampo }
                     />

                    <FormField
                     label='Cor:' 
                     value={valores.cor} 
                     name='cor' 
                     type='color' 
                     onChange={ handleDoValorCampo }
                     />

                    <FormField id='Checkbox'
                        label='Link adicional'
                        value=''
                        name='link adicional'
                        type='checkbox'
                        onChange={() => setChecked(!checked)}
                        
                    />

                    
                    { checked === true && (
                        <>
                            <FormField
                                label='Texto do Link:' 
                                value={valores.textLinkExtra} 
                                name='textLinkExtra' 
                                type='text' 
                                onChange={ handleDoValorCampo }
                            />

                            <FormField
                                label='URL do Link Extra:' 
                                value={valores.url} 
                                name='url' 
                                type='text' 
                                onChange={ handleDoValorCampo }
                            />
                        </>

                    )}


                    <ContainerBox> 
                        <ItenBox>  
                            <Button type="submit"
                                disabled={
                                     (valores.titulo === '' || valores.descricao === '') 
                                     || (checked === true && (valores.textLinkExtra === '' || valores.url === '') )  
                                }
                             >
                                Cadastrar
                            </Button>
                        </ItenBox>
                        
                        <ItenBox>
                            <ButtonLink to="/"> 
                                Home
                            </ButtonLink>
                            <ButtonLink to="/cadastro/video"> 
                                Cadastrar Vídeo
                            </ButtonLink>
                        </ItenBox>
                    </ContainerBox>

            </form>

            { categorias.length === 0 && (<div>
                    Carregando...
                </div>

            )}

            <ContainerList>

                {categorias.map((categoria, index) =>{

                return (
                    <ItemList backgroundColor={categoria.cor} key={`${categoria}${index}`} >
                         {categoria.titulo}
                    </ItemList>
                    )

                })}
            </ContainerList>

          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroCategoria;