const { Sequelize, DataTypes, Model } = require('sequelize');
const dbConfig = require('../config/db.config');

// _____________ Conexão com o Banco de Dados _________________

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: dbConfig.define
});


module.exports = {
    Sequelize: Sequelize,
    DataTypes: DataTypes,
    Model: Model,
    sequelize: sequelize
}