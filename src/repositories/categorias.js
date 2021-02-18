import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIESWITHVIDEOS = `${config.URL_BACKEND}/categoriasWithVideos`;


function getAllWithVideos(){
    setTimeout(()=>{console.log('Requirindo todas as categorias com os videos...')}, 1000);
    return (fetch(`${URL_CATEGORIESWITHVIDEOS}`).then(
        async (respostaDoServidor) => {
            console.log(respostaDoServidor.ok);
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Testando....');
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        }));
}

function getAll(){
    setTimeout(()=>{console.log('Requirindo todas as categorias...')}, 1000);
    return fetch(`${URL_CATEGORIES}`).then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();

                
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}

function create(objetoDaCategoria){

    

    setTimeout(()=>{console.log('Enviando nova categoria ao servidor...')}, 1000);
    return fetch(`${URL_CATEGORIES}`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoDaCategoria),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('reposta', resposta);

                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}



export default {
    getAllWithVideos,
    getAll,
    create,
};