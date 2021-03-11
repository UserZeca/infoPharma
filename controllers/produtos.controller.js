const { Produtos } = require('../models/produtos.model');

exports.create = (req, res) => {
    
    let produto = {
        nome: req.body.nome,
        url: req.body.url,
        categoriaId: req.body.categoriaId,
        emPromocao: req.body.emPromocao,
        preco: req.body.preco,
        subcategoria: req.body.subcategoria
    }


    Produtos.create(produto)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Produto'
        });
    });
}

exports.findSales = (req, res) => {

    Produtos.findAll({
        where:{ 
            emPromocao: true
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving Produtos Sales'
        })

    })

}

exports.findAll = (req, res) => {

   
    
    Produtos.findAll({where: req.id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Produtos'
        });
    });
    
};

exports.findOne = (req,res) => {
    const id = req.params.id;
    Produtos.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: `Erro retrieving Produto with id=${id}`,
        });
    });
};



exports.update = (req, res) => {

    const id = req.params.id;
    console.log(`ID PRODUTO ${id}`);
    Produtos.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Produto was updated successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Erro updating Produto with id=${id}`
        });

    });

};


exports.delete = (req,res) => {
    const id = req.params.id;

    Produtos.destroy({
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Produto was deleted successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Could not delete Produto with id=${id}`
        });

    });
};

exports.deleteAll =  (req,res) => {
    const id = req.params.id;

    Produtos.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Produtos were deleted successfully!`
        });
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while removing all Produtos.'
        });

    });
};

