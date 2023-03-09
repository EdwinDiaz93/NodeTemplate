const { UsuarioController } = require('../controllers');
const usuarioRouter = require('express').Router();
const { body } = require('express-validator');
const { validatorRequest } = require('../middlewares');


usuarioRouter.get('/', UsuarioController.getUsuarios);
usuarioRouter.get('/:id', UsuarioController.getUsuario);
usuarioRouter.delete('/:id', UsuarioController.deleteUsuario);

usuarioRouter.post('/',
    body('username')
        .not()
        .isEmpty()
        .withMessage('El campo username es obligatorio')
        .isLength({ min: 5 })
        .withMessage('El campo username debe tener almenos 5 caracteres'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('El campo email es obligatorio')
        .isEmail()
        .withMessage('El campo email debe ser valido'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('El campo password es obligatorio')
        .isLength({ min: 3 })
        .withMessage('El campo password debe tener almenos 3 caracteres'),
    [validatorRequest],
    UsuarioController.saveUsuario);


usuarioRouter.put('/:id',
    body('username')
        .not()
        .isEmpty()
        .withMessage('El campo username es obligatorio')
        .isLength({ min: 5 })
        .withMessage('El campo username debe tener almenos 5 caracteres'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('El campo email es obligatorio')
        .isEmail()
        .withMessage('El campo email debe ser valido'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('El campo password es obligatorio')
        .isLength({ min: 3 })
        .withMessage('El campo password debe tener almenos 3 caracteres'),
    [validatorRequest],
    UsuarioController.updateUsuario);

usuarioRouter.get('/seed', UsuarioController.seedUsuario);

module.exports = usuarioRouter;


