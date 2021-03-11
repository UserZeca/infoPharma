import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIESWITHVIDEOS = `${config.URL_BACKEND}/categoriasWithProdutos`;
const URL_CATEGORIESWITHPRODUTOSSALES = `${config.URL_BACKEND}/categoriasWithProdutosSales`


function getAllWithProdutos(){
    setTimeout(()=>{console.log('Requirindo todas as categorias com os produtos...')}, 1000);
    return (fetch(`${URL_CATEGORIESWITHVIDEOS}`).then(
        async (respostaDoServidor) => {
            console.log(respostaDoServidor.ok);
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
               // console.log('Testando....');
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        })
        .catch((err => {
            console.log(err);
        }))
        );
}

function getAllWithProdutosSales(){
    setTimeout(()=>{console.log('Requirindo todas as categorias com os produtos em promoção...')}, 1000);
    return (fetch(`${URL_CATEGORIESWITHPRODUTOSSALES}`).then(
        async (respostaDoServidor) => {
            console.log(respostaDoServidor.ok);
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Testando....');
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        })
        .catch((err => {
            console.log(err);
        }))
    );
}

function getAll(){
    setTimeout(()=>{console.log('Requirindo todas as categorias...')}, 1000);
    return fetch(`${URL_CATEGORIES}`)
        .then(
            async (respostaDoServidor) => {
                if(respostaDoServidor.ok){   
                    const resposta = await respostaDoServidor.json();
                    console.log('Sucesso ao requirir categorias!');
                    console.log(resposta);
                    
                    return resposta;
                }
                throw new Error('Não foi possível se conectar ao servidor!');
            }
        )
        .catch((err => {
            console.log(err);
        }))        
        ;
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


function deleteCategoria(objetoDaCategoria){

    setTimeout(()=>{console.log('Enviando nova categoria ao servidor...')}, 1000);
    return fetch(`${URL_CATEGORIES}/${objetoDaCategoria.id}`,{
        method: 'DELETE',
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


function updateCategoria(objetoDaCategoria){

    setTimeout(()=>{console.log(`Enviando nova categoria ao servidor... `)}, 1000);
    setTimeout(()=>{console.log(`${JSON.stringify(objetoDaCategoria)}`)}, 1000);

    return fetch(`${URL_CATEGORIES}/${objetoDaCategoria.id}`,{
        method: 'PUT',
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
    getAllWithProdutos,
    getAllWithProdutosSales,
    getAll,
    create,
    deleteCategoria,
    updateCategoria
};
