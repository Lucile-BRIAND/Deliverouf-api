const express = require( 'express');
const commandeRoute = express.Router();
 
// Require controller modules.

const commandeController = require('../controller/CommandeControllers')
 
commandeRoute.get('/', commandeController.index);

commandeRoute.post('/', commandeController.insert);
 
commandeRoute.put('/:id', commandeController.update);
 
commandeRoute.delete('/:id', commandeController.delete);
 
module.exports = commandeRoute;