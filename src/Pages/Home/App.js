import React , { useEffect , useState} from 'react';
import BannerMain from '../../components/BannerMain';
import Carroussel from '../../components/Carroussel';
import PageDefault from '../../components/PageDefault';
import '../../index.css';
import Data from '../../repositories/categorias';
import Loading from './components/loading';

// Váriavel de controle de layout do menu
const menuWithButtonLink = true;

// Váriavel que aciona a animação de loading enquanto as informações do servidor chegam 
let loading = true;



function Home() {

  // db -> Objeto que irá armazenar informações obtidas do servidor
  const [db, setDados ] = useState([]); 
  
  
    useEffect(() => {
        Data.getAllWithProdutosSales().then( (respostaDoServidor) => {

          console.log("resposta do servidor ... zelda");
          console.log(respostaDoServidor);
          
          setDados(respostaDoServidor);
          loading = false;

        })
        .catch((err) =>{
          // Mostrar erro ao usuário ( Tratar o erro)
          console.log(err);
        });
      }
    ,[]);
    
    console.log('TESTE 1.0');
    console.log(db)

  return (
   
   <PageDefault menuWithButtonLink={menuWithButtonLink}>
   
    
      {db.length === 0 && loading === true && (
      
        <Loading />

      
      
      ) }
      
          {db.length >= 1 && (

            <>
              <BannerMain 
          
                videoDescription={"Será que é possível tornar MARTE em um planeta Habitável? Como iremos fazer isso? Descubra aqui, no Nostalgia Ciência!"}

                />
                  
                {db.map((db, index) =>{
                    {/*
                    if(index === 0){
                    }

                  */}
                  
                        return (
                          <>
                            <Carroussel
                            ignoreFirstVideo
                            category={db}
                            />
                          </>
                        )
                    
                    return (
                      
                      <>
                        
                      {/*
                        <Carroussel key={db.id}
                            false
                            category={db}
                        />

                      */}

                        <div>
                            {db.titulo} AAA
                        </div>

                      </>
                    )

                })}
              
            </>


            )
        }
    
      
    </PageDefault>

  );
}

export default Home;
