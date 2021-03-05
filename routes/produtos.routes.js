module.exports = app => {
    const produtos = require('../controllers/produtos.controller');

    let router = require('express').Router();
 

    router.post('/', produtos.create);
    router.get('/', produtos.findAll);
   // router.get('/promocoes', produtos.findSale);
    router.get('/:id', produtos.findOne);
    router.put('/:id', produtos.update);
    router.delete('/:id', produtos.delete);
    router.delete('/', produtos.deleteAll);


    app.use('/api/produtos', router);
    
}