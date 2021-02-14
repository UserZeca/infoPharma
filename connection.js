const { Sequelize, DataTypes, Model } = require('sequelize');

// _____________ Conexão com o Banco de Dados _________________

module.exports = () => {
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
    return sequelize;
}  

