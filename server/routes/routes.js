const PetController = require('../controllers/controller');

// ROUTES REQUIRE CONTROLLERS

module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getPet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.delete('/api/pet/:id', PetController.deletePet);
}