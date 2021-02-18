module.exports = app => {
    const categorias = require('../controllers/videos.controller');

    let router = require('express').Router();
 

    router.post('/', categorias.create);
    router.get('/', categorias.findAll);
    router.get('/:id', categorias.findOne);
    router.put('/:id', categorias.update);
    router.delete('/:id', categorias.delete);
    router.delete('/', categorias.deleteAll);

    app.use('/api/videos', router);
    
}