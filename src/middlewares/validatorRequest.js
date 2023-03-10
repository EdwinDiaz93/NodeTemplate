const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validatorRequest = (req = request, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = validatorRequest;