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


function getAll(){

    setTimeout(()=>{console.log('Procurando por produtos ...')}, 1000);
    
    return fetch(`${URL_PRODUTOS}`)
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Mostrando produtos');
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
        method: 'GET',
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


function deleteProduto(objetoProduto){

    setTimeout(()=>{console.log('Enviando nova categoria ao servidor...')}, 1000);
    return fetch(`${URL_PRODUTOS}/${objetoProduto.id}`,{
        method: 'DELETE',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoProduto),
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


function updateProduto(objetoProduto){

    setTimeout(()=>{console.log(`Atualizando  `)}, 1000);
    setTimeout(()=>{console.log(objetoProduto.emPromocao)}, 1000);

    

    return fetch(`${URL_PRODUTOS}/${objetoProduto.id}`,{
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            nome: objetoProduto.nome,
            subcategoria: objetoProduto.subcategoria,
            preco: objetoProduto.preco,
            url: objetoProduto.url,
            emPromocao: objetoProduto.emPromocao

        }),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('reposta', resposta);

                return resposta;
            }

            console.log(respostaDoServidor)
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}

export default {
    create,
    getAll,
    findSales,
    deleteProduto,
    updateProduto
};