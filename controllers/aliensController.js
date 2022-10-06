const Alien = require('../models/alien'); 


const getAliens = async (req, res) => { 

    try {
        const aliens = await Alien.find(); 
        res.json(aliens); 
    } catch (err) {
        res.send('Error ' + err)
    }
};

const getAlien = async (req, res) => {

    try{
        const alien = await Alien.findById(req.params.id); 
        res.json(alien); 
    } catch(err){
        res.send('Error ' + err)
    }
};


const addAlien = async (req, res) => { 

    const alien = new Alien({

        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try{
        const newAlien = await alien.save(); 
        res.json(newAlien); 
    } catch(err){
        res.send('Error');
    }
};


const editAlien = async (req, res) => { 

    try{
        const alien = await Alien.findById(req.params.id); 
        alien.sub = req.body.sub; 
        const editedAlien = await alien.save(); 
        res.json(editedAlien); 
    } catch(err){
        res.send('Error')
    }
};

const deleteAlien = async (req, res) => {

    try {
        const deletedAlien = await Alien.deleteOne({_id: req.params.id});
        res.json({messsage: "Registro eliminado :)"}); 
    } catch(err){
        res.send('Error');
    }
};


module.exports = {

    getAliens,
    getAlien,
    addAlien,
    editAlien,
    deleteAlien
}