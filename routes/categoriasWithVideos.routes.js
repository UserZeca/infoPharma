module.exports = app => {
    const categorias = require('../controllers/categorias.controller');

    let router = require('express').Router();
 
    router.get('', categorias.getCategoriasWithVideos );
   
    app.use('/api/categoriasWithVideos', router);
    
}
