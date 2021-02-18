// Arquivo de configuração de váriaveis de ambiente


/*
const URL_BACKEND = window.location.hostname.includes('localhost') 
        ? 'https://zecaflix.herokuapp.com' 
        : 'http://localhost:8080';
 */


const URL_BACKEND = 'http://localhost:8080/api';

//const URL_BACKEND = 'https://zecaflix.herokuapp.com';
console.log('server rodando em:',URL_BACKEND);

export default {
    URL_BACKEND,

};