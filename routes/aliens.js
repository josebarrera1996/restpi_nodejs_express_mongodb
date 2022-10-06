const express = require('express'); 
const router = express.Router(); 
const controller = require('../controllers/aliensController'); 

/* Definiendo las rutas de la aplicación */

router.get('/', controller.getAliens); 
router.get('/:id', controller.getAlien); 
router.post('/', controller.addAlien);
router.patch('/:id', controller.editAlien); 
router.delete('/:id', controller.deleteAlien); 

module.exports = router;