const { Sequelize, DataTypes, Model, sequelize} = require('./db');

// Obs.: O campo categoriaId é criado autómaticamente pelo mysql, por isso não é adicionado nesse modelo.


class Produtos extends Model {}

Produtos.init({

    createdAt: {
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    }, 
    nome: {
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
        type: Sequelize.STRING,
        defaultValue: 'Geral',
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
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
    },

    url: {
        type: Sequelize.STRING,
        defaultValue: '/',
        
    },

    preco: {
        type: DataTypes.FLOAT,
        validate: {
            notEmpty: {
                msg: '[url] This field cannot be empty'
            },
        }

    },
    
    emPromocao: {
        type: DataTypes.BOOLEAN,
    }
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'produtos' // We need to choose the model name
});


module.exports = {

    Produtos: Produtos

}