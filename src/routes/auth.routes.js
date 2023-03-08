const authRouter = require('express').Router();
const { AuthController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');


authRouter.post('/login', AuthController.login);
authRouter.get('/refresh-token', [validateToken], AuthController.refresh);

module.exports = authRouter;
