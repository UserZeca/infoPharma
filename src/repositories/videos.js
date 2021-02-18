import config from '../config'
import {insertVideo} from '../teste2.js'

function create(objetoDoVideo){
    
    insertVideo(objetoDoVideo);

}
/*

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;


function create(objetoDoVideo){
    setTimeout(()=>{console.log('Enviando novo video ao servidor...')}, 1000);
    return fetch(`${URL_VIDEOS}`,{
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
                
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}

*/

export default {
    create,
};