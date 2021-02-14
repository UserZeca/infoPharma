const jsonServer = require('json-server');

const server = jsonServer.create();                     // Criando json server 
const router = jsonServer.router('./src/data/db.json'); // Rota de onde se localiza nossos dados
const middlwares = jsonServer.defaults();

const port = process.env.PORT || 8080;                  // Constante que armazena a porta em que o servidor local irá rodar

server.use(middlwares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server está rodando na porta ${port}`);
    
});