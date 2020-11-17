var express = require('express');
var router = express.Router();
var usuarioApiController = require('../Controller/api/usuarioApiController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*rutas crud */
router.get('/listar',usuarioApiController.listar)
router.post('/crear',usuarioApiController.crear)
router.delete('/eliminar',usuarioApiController.eliminar)
router.post('/actualizar',usuarioApiController.actualizar)


module.exports = router;
