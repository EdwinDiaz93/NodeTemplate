const { UsuarioController } = require('../controllers');

const usuarioRouter = require('express').Router();


usuarioRouter.get('/', UsuarioController.getUsuarios);
usuarioRouter.post('/', UsuarioController.saveUsuario);
usuarioRouter.get('/seed', UsuarioController.seedUsuario);

module.exports = usuarioRouter;


