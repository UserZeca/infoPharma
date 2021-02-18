const { Sequelize, DataTypes, Model, sequelize} = require('./db');


class Videos extends Model {}

Videos.init({

    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
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
                args: [3, 150],
                msg: '[titulo] This field must be between four and thirty characters'
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
    }
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Videos' // We need to choose the model name
});

module.exports = {

    Videos: Videos

}