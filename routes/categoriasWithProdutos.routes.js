module.exports = app => {
    const categorias = require('../controllers/categorias.controller');

    let router = require('express').Router();
 
    router.get('', categorias.getCategoriasWithProdutos );
   
    app.use('/api/categoriasWithProdutos', router);
    
}
