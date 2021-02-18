const { Videos } = require('../models/videos.model');

exports.create = (req, res) => {
    
    let video = {
        titulo: req.body.titulo,
        url: req.body.url
    }

    Videos.create(video)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Video'
        });
    });
}

exports.findAll = (req, res) => {
    
    Videos.findAll({where: req.id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Videos'
        });
    });
    
};

exports.findOne = (req,res) => {
    const id = req.params.id;
    Videos.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: `Erro retrieving Video with id=${id}`,
        });
    });
};



exports.update = (req, res) => {

    const id = req.params.id;
    Videos.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Video was updated successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Erro updating Video with id=${id}`
        });

    });

};


exports.delete = (req,res) => {
    const id = req.params.id;

    Videos.destroy({
        where: { id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Video was deleted successfully'
            });
        }else{
            res.send({});
        }

    })
    .catch(err =>{
        res.status(500).send({
            message: `Could not delete Video with id=${id}`
        });

    });
};

exports.deleteAll =  (req,res) => {
    const id = req.params.id;

    Videos.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Videos were deleted successfully!`
        });
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while removing all Videos.'
        });

    });
};

