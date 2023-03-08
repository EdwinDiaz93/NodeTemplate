const { request, response } = require('express');
const { verifyToken } = require('../helpers/jwt');
const validateToken = async (req = request, res = response, next) => {

    const token = req.headers.authorization.split(' ').pop();

    const usuario = await verifyToken(token);

    req.usuario = usuario;

    next();


}

module.exports = validateToken;