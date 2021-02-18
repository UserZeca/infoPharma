const { Categorias } = require('../models/categorias.model');
const { Videos } = require('../models/videos.model');

exports.create = (req, res) => {
    
    let categoria = {
        titulo: req.body.titulo,
        cor: req.body.cor,
        text: req.body.text,
        url: req.body.url
    }

    Categorias.create(categoria)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Categoria'
        });
    });
}

exports.findAll = (req, res) => {
    
    Categorias.findAll({where: req.id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Categorias'
        });
    });
    
};

exports.findOne = (req,res) => {
    const id = req.params.id;
    Categorias.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: `Erro retrieving Categoria with id=${id}`,
        });
    });
};



exports.update = (req, res) => {

    const id = req.params.id;
    Categorias.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Categoria was updated successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Erro updating Categoria with id=${id}`
        });

    });

};


exports.delete = (req,res) => {
    const id = req.params.id;

    Categorias.destroy({
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Categoria was deleted successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Could not deleteCategoria with id=${id}`
        });

    });
};

exports.deleteAll =  (req,res) => {
    const id = req.params.id;

    Categorias.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Categorias were deleted successfully!`
        });
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while removing all Categorias.'
        });

    });
};

exports.getCategoriasWithVideos =  (req,res) => {

    console.log(req.params);
    
        Categorias.findAll({ include: Videos })
        .then(data => {
            console.log('\nTESTANDO: \n' + data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Categorias with Videos'
            });
        });
}