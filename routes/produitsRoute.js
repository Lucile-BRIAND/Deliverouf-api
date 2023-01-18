const express = require( 'express');
const produitsRoute = express.Router();
 
// Require controller modules.

const produitsController = require('../controller/ProduitsControllers')
 
produitsRoute.get('/', produitsController.index);

produitsRoute.post('/', produitsController.insert);
 
produitsRoute.put('/:id', produitsController.update);
 
produitsRoute.delete('/:id', produitsController.delete);
 
module.exports = produitsRoute;