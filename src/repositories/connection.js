const Express = require('express');
const app = Express();
const port = 8081;


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)

});