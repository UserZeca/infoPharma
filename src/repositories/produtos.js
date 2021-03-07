import config from '../config'

const URL_PRODUTOS = `${config.URL_BACKEND}/produtos`;


function create(objetoDoVideo){

    setTimeout(()=>{console.log('Enviando novo produto ao servidor...')}, 1000);
    setTimeout(()=>{console.log(objetoDoVideo);}, 1000);
    return fetch(`${URL_PRODUTOS}`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Mostrando vídeos');
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
    }).catch(err =>{
        console.log(err);
        alert('Erro ao cadastrar produto');

    })
}

function findSales(objetoProduto){

    setTimeout(()=>{console.log('Procurando por produtos em promoção...')}, 1000);
    setTimeout(()=>{console.log(objetoProduto);}, 1000);
    return fetch(`${URL_PRODUTOS}`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoProduto),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Mostrando produtos...');
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}




export default {
    create,
    findSales
};