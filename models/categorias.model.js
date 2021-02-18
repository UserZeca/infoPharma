const { Sequelize, DataTypes, Model, sequelize } = require('./db');


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
  modelName: 'categorias' // We need to choose the model name
});


module.exports = {
    Categorias: Categorias
}