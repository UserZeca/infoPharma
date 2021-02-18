const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/');
 
const app = express();


// + Conexão do Sequelize ___________________________________________
sequelize.sync();

sequelize.authenticate()
.then(()=>{
    console.log('Sucessful connection!');
})
.catch(()=>{
    console.log('Error authenticating the connection!');
});

// _________________________________________________________________

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', (req, res) => {
    res.json({ message: 'Testando' });
});


require('./routes/categorias.routes')(app);
require('./routes/categoriasWithVideos.routes')(app);
require('./routes/videos.routes')(app);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});

/*const jsonServer = require('json-server');

const server = jsonServer.create();                     // Criando json server 
const router = jsonServer.router('./src/data/db.json'); // Rota de onde se localiza nossos dados
const middlwares = jsonServer.defaults();

const port = process.env.PORT || 8080;                  // Constante que armazena a porta em que o servidor local irá rodar

server.use(middlwares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server está rodando na porta ${port}`);
    
});

*/