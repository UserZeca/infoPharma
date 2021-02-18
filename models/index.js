const { sequelize } = require('./db');
const { Categorias } = require('./categorias.model');
const { Videos } = require('./videos.model');
const relationships = require('../functions/relationships');


// Criando relacionamento entre as tabelas
relationships.oneToMany(Categorias, Videos, 'id');


module.exports = {
    sequelize: sequelize,
}

