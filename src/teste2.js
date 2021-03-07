const URL_PRODUTOS = `http://localhost:8080/api/produtos`;
const fetch = require('node-fetch');


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
           
            console.log(respostaDoServidor);
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('Mostrando vídeos');
                console.log(resposta);
                return resposta;
            }
            //throw new Error('Não foi possível se conectar ao servidor!');
    }).catch(err =>{
        console.log(err);

    })
}


create({categoriaId: 5, nome: "Markids Produto", url: "www.markids.com.br", preco: "89.99", subcategoria:"MarcusVini", emPromocao: false});
