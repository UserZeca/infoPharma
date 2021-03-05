module.exports = app => {
    const categorias = require('../controllers/categorias.controller');

    let router = require('express').Router();
 
    router.get('', categorias.getCategoriasWithProdutosSales );
   
    app.use('/api/categoriasWithProdutosSales', router);
    
}
