
const { response } = require('express');
const { Pet } = require('../models/pets');

//CONTROLLERS REQUIRE MODELS

module.exports.index = (req, res) => {
    res.json({
        message: "Front page of the news son"
    });
}

module.exports.createPet = (req, res) => {
    const {petName, petType, petDesc, skillOne, skillTwo, skillThree} = req.body;
    Pet.create({
        petName, petType, petDesc, skillOne, skillTwo, skillThree
    })
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err))
}

module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}
