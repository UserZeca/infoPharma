const Sequelize = require('sequelize');
const data = require('./src/data/dbTeste.json');

function conectFromDataBase(){
    
    const sequelize = new Sequelize('zecaflix', 'root', '', {
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
    .then( () =>{
        console.log('Conexão realizada com sucesso!');
    })
    .catch((erro) =>{
        console.log(`Erro ao tentar conexão: ${erro}`);
    });

}

function createDataBase(){
  
    const categorias = sequelize.define('categorias', {
        
        cor: {
            allowNull: false,
            type: Sequelize.STRING
        },
    
        createdAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        },
    
        text: {
            type: Sequelize.TEXT,
        },
    
        titulo: {
            allowNull: false,
            type: Sequelize.STRING,
        },
    
        updatedAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        },
        url: {
            type: Sequelize.STRING,
        },
    
    });
    
    const videos = sequelize.define('videos', {
    
        categoriaId : { 
            allowNull: false,
            references: { model: 'categorias', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            type: Sequelize.INTEGER,
        },
    
        createdAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        }, 
        titulo: {
            allowNull: false,
            type: Sequelize.STRING
        },
        updatedAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        },
    
        url: {
            allowNull: false,
            type: Sequelize.STRING
        }
       
    }); 
    
    
    categorias.hasMany(videos, {                // Nesse caso, teremos muitos vídeos com a mesma chave estrangeira
        foreingKey: 'categoriaId'
    });
    videos.belongsTo(categorias);               // e cada um desses vídeos, vão percencer somente a X categoria
    
    
    (async () => {
       await sequelize
       .sync({force: true})
       
       .then(() =>{
            categorias.bulkCreate(data.categorias)
            .then((element) =>{
                console.log(element);
            });
        
        })
        .then(() =>{
            videos.bulkCreate(data.videos)
            .then((element) =>{
                console.log(element);
            });
        
        });
       
    })();
}

conectFromDataBase();

