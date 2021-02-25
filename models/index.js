const { sequelize } = require('./db');
const { Categorias } = require('./categorias.model');
const { Produtos } = require('./produtos.model');
const relationships = require('../functions/relationships');


// Criando relacionamento entre as tabelas
relationships.oneToMany(Categorias, Produtos, 'id');


module.exports = {
    sequelize: sequelize,
    Categorias: Categorias,
    Produtos: Produtos
}

