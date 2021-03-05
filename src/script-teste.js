const data = require('./data/dbBuild.json');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('ifp', 'root', '', {
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
});

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
                msg: '[text] This field must be between 0 and 120 characters'
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
                msg: '[titulo] This field must be between 3 and 50 characters'
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
  modelName: 'categorias' // We need to choose the model name
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
        validate: {
            notEmpty: {
                msg: '[nome] This field cannot be empty'
            },
            len: {
                args: [3, 150],
                msg: '[nome] This field must be between 3 and 150 characters'
            }       
        }
    },
    subcategoria: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: '[nome] This field cannot be empty'
            },
            len: {
                args: [3, 150],
                msg: '[nome] This field must be between 3 and 150 characters'
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

    preco: {
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


async function loadData(){
    (async () => {
        await sequelize // Método que sincroniza todos os models (cada classe que extende a classe Model)
        .sync({force:true})
        .then(() =>{
            Categorias.bulkCreate(data.categorias)
            .then((element) =>{
                console.log(element);
            });
        })
    
        .then(() =>{
            for(let i=0 ; i< data.categorias.length; i++){
                Produtos.bulkCreate(data.categorias[i].dados)
                .then((element) =>{
                    console.log(element);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        });
        
    })();

    await console.log(Categorias === sequelize.models.Categorias); // true
  //  await console.log(Produtos === sequelize.models.Produtos); // true
}


loadData();