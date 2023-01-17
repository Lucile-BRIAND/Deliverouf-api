const express = require( 'express');
const router = express.Router();
 
// Require controller modules.
const controllers = require('../controller/todoControllers')
 
router.get('/', controllers.index);
 
router.post('/', controllers.insert);
 
router.put('/:id', controllers.update);
 
router.delete('/:id', controllers.delete);
 
module.exports = router;