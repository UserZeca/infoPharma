const { Sequelize, DataTypes, Model } = require('sequelize');
const data = require('./data/dbTeste.json');

// _____________ Conexão com o Banco de Dados _________________


const sequelize = new Sequelize('test', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        underscored: false,
        freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestaps: true
    }
});

sequelize.authenticate()
.then(()=>{
    console.log('Sucessful connection!');
})
.catch(()=>{
    console.log('Error authenticating the connection!');
})

// _________________ Classe das Categorias _______________________

class Categorias extends Model {
}

Categorias.init({
    cor: {
        allowNull: false,
        type: Sequelize.STRING,
         validate: {
            notEmpty: {
                msg: '[cor] This field cannot be empty'
            },
        }
    },

    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    },

    text: {
        type: Sequelize.TEXT,
        validate: {
            len: {
                args: [0, 120],
                msg: '[text] This field must be between zero and thirty characters'
            }       
        }

    },

    titulo: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: {
                msg: '[titulo] This field cannot be empty'
            },
            len: {
                args: [3, 50],
                msg: '[titulo] This field must be between four and fifty characters'
            },
            
        }       
    }, 

    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    },
    url: {
        type: Sequelize.STRING,
    
    },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Categorias' // We need to choose the model name
});



// ______________Classe de Vídeos___________________

class Produtos extends Model {}

Produtos.init({

    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    }, 
    nome: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: {
                msg: '[nome] This field cannot be empty'
            },
            len: {
                args: [3, 150],
                msg: '[nome] This field must be between four and thirty characters'
            }       
        }
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    },

    url: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: '[url] This field cannot be empty'
            },
        }       
    },

    valor: {
        allowNull: false,
        type: DataTypes.FLOAT,
        validate: {
            notEmpty: {
                msg: '[url] This field cannot be empty'
            },
        }

    }
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'produtos' // We need to choose the model name
});


// _________________ Relacionamento das Colunas ____________________

Categorias.hasMany(Produtos, {     // Uma categoria tem muitos videos
    foreingKey: 'id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});
Produtos.belongsTo(Categorias);    // Um video tem uma categoria. Equivalente a : Categorias.hasOne(Videos)


// the defined model is the class itself
//sequelize.sync();     
async function loadData(){
    (async () => {
        await sequelize // Método que sincroniza todos os models (cada classe que extende a classe Model)
        .sync({force:true})
        .then(() =>{
            Categorias.bulkCreate(data)
            .then((element) =>{
                console.log(element);
            });
        })
        .then(() =>{
            Produtos.bulkCreate(data)
            .then((element) =>{
                console.log(element);
            });
        
        }); 
    })();

    await console.log(Categorias === sequelize.models.Categorias); // true
    await console.log(Produtos === sequelize.models.Produtos); // true
}



/* [X] Função que retorna todas as categorias
   [X] Função que retorna os vídeos com suas respectivas categorias
   [X] Função que cria vídeo
   [X] Função que cria categoria
   [X] Função que deleta categoria
   [X] Função que deleta video
   [X] Função que atualiza categoria
   [X] Função que atualiza video
   [ ] Fazer com que os objetos sejam retornados sem as promisse, somente com o resultado
   [ ] Retornar os erros para que eles sejam visualizados pelo usuário
   [ ]
*/

/*
async function getCategorias(){
 
    const Categorias = await Categorias.findAll()
    .then((c)=>{
        
        let arrayData = []

        for (var i=0; i < c.length; i++){
            arrayData.push(c[i].dataValues);
        }

        console.log(c);
        console.log(arrayData);

       // console.log(c[0].dataValues)
        return arrayData;  // Resolver: Conseguir receber somente os resultados das promisses
    })
    .catch(()=>{
        console.log('Erro ao tentar obter as Categorias');
    
    });

   //console.log(categorias);


    //console.log(categorias.every(categoria => categoria instanceof Categorias)); // true
  //  console.log(JSON.stringify(categorias, null,2));
    return categorias;
}

async function getCategoriasWithVideos(){
    
    // console.log(JSON.stringify(categoriasWithVideos, null, 2));
    const subCateWithVideos = await Categorias.findAll({ include: Videos })
    .then((c)=>{

        //console.log(c[0].dataValues.Videos);
        let arrayData = []

        for (var i=0; i < c.length; i++){
           arrayData.push(c[i].dataValues);
        }  

        
        return arrayData;


        /*
        
        */
        /*
            Problema: Se analizarmos somente o arrayData, nesse caso, veremos que as promisses foram aparentemente removidas
            sobrando somente o que nos interessa o resultado delas, entretanto, ao observarmos o objeto Videos dentro de arrayData
            podemos perceber que o mesmo retona tanto o resultado da promisse quanto a promisse em si. Buscar uma forma de retornar 
            somente o resultado da promisse.
        
        */

        //console.log(arrayData);

       // console.log(c[0].dataValues)
        //return arrayData;  // Resolver: Conseguir receber somente os resultados das promisses
    /*
    })
    .catch(()=>{
        console.log('Erro ao tentar obter as categorias');
        return false;
    }) // Função que retorna todas as categorias que existem relacionadas com os videos


    return categoriasWithVideos;

} 

async function insertCategoria(objectCategoria){

    const categoria = Categorias.build(objectCategoria)
    await categoria.save()
    .then(() => {
        console.log('Sucesso ao inserir uma nova categoria');
    })
    .catch((e)=>{

        let erro = [];
        //console.log(e.errors[1].validatorName);

        for (var i of e.errors){
           
            erro.push({type: i.validatorKey, args: i.validatorArgs })
        }

        console.log(erro);
        // Tratar erros de uma forma mais consistente, por exemplo, retornar o tipo de erro para que no front-end
        // seja mostrado ao usuário(é claro, de maneira mais abstraída).

        //console.log(`\n*Erro ao adicionar uma nova categoria*\n ${e}\n`);
    });  

}


 async function insertVideo(objectVideo){

    const video = Videos.build(objectVideo);

    await video.save()
    .then(()=>{
        console.log('Sucesso ao inserir um novo vídeo');
    })
    .catch((e)=>{
        console.log(`\n*Erro ao adicionar um novo vídeo*\n ${e}\n`);
    });  
}

async function deleteCategoria(categoriaId){

    await Categorias.destroy({
        where: {
            id: categoriaId
        }
    })
    .then((res)=>{
        if(res == 0)
            console.log('O elemento não existe, logo não pode ser deletado');
        else
            console.log('Sucesso ao deletar a categoria!');
    })
    .catch((e)=>{
        console.log(`\n*Erro ao tentar deletar a categoria*\n ${e}\n`);
    });  
}

async function deleteVideo(videoId){

    await Videos.destroy({
        where: {
            id: videoId
        }
    })
    .then((res)=>{
        if(res == 0)
            console.log('O elemento não existe, logo não pode ser deletado');
        else
            console.log('Sucesso ao deletar o vídeo!');
    })
    .catch((e)=>{
        console.log(`\n*Erro ao tentar deletar o vídeo*\n ${e}\n`);
    });  
}

async function updateCategoria(objCategoria, categoriaId){
    await Categorias.update(objCategoria,{
        where: {
            id: categoriaId
        } 
    })
    .then(() => {
        console.log(`Sucesso ao atualizar o video [ID: ${categoriaId}]`);
    })
    .catch((e)=>{
        console.log(`\n*Erro ao tentar atualizar o vídeo*\n ${e}\n`);
    });
}

async function updateVideo(objVideo,videoId){
    await Videos.update(objVideo,{
        where: {
            id: videoId
        } 
    })
    .then(() => {
        console.log(`Sucesso ao atualizar o video [ID: ${videoId}]`);
    })
    .catch((e)=>{
        console.log(`\n*Erro ao tentar atualizar o vídeo*\n ${e}\n`);
    });
}

async function getVideos(){
 
    const categorias = await Videos.findAll()
    .then((c)=>{
        
        let arrayData = []

        for (var i=0; i < c.length; i++){
            arrayData.push(c[i].dataValues);
        }

        console.log(c);
        console.log(arrayData);

       // console.log(c[0].dataValues)
        return arrayData;  // Resolver: Conseguir receber somente os resultados das promisses
    })
    .catch(()=>{
        console.log('Erro ao tentar obter as categorias');
    
    });

   //console.log(categorias);


    //console.log(categorias.every(categoria => categoria instanceof Categorias)); // true
  //  console.log(JSON.stringify(categorias, null,2));
    return categorias;
}

//getVideos()
//getCategorias();
 //getCategoriasWithVideos();

// ___________________________ Área de Testes ____________________

loadData()

//deleteVideo(57);

//updateCategoria({cor:'pink'}, 12);

//deleteCategoria(22);
/*
insertCategoria({
    titulo: 'Markids',
    text: '',
    cor: 'purple',
    url: '',
})
updateVideo({titulo: 'Teste'}, 59);

insertVideo({
    categoriaId: 2,
    titulo: 'PEGA A VISÃO, PARCEIRO! O que o BBB tem a ver com a sua vida? - Ep. 1519',
    url: 'https://www.youtube.com/watch?v=mBXnKj3cyWs'
});

*/

//loadData(); // Função que carrega os dados de um arquivo Json que tem a mesma estrutura das tabelas


// __________________________ Função que obtém todas as categorias ________________________________

//getCategorias();
 // Função que retorna todas as categorias que existem


// _____________________ Função que obtém todas as categorias junto com os vídeos _________________

// getCategoriasWithVideos();

//insertVideo({''})