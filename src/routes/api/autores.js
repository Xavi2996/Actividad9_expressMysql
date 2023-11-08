const router = require('express').Router();
const autoresController = require('../../controllers/autores.controller');

router.get('/', autoresController.getAllAutores);
router.post('/', autoresController.createAutor);
router.put('/:autorId', autoresController.updateAutor);
router.delete('/:autorId', autoresController.DeleteAutor);

module.exports = router;