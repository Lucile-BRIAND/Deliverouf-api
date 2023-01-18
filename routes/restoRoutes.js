const express = require( 'express');
const restoRoute = express.Router();
 
// Require controller modules.
const controllers = require('../controller/RestaurantControllers')
 
restoRoute.get('/', controllers.index);
 
restoRoute.post('/', controllers.insert);
 
restoRoute.put('/:id', controllers.update);
 
restoRoute.delete('/:id', controllers.delete);
 
module.exports = restoRoute;