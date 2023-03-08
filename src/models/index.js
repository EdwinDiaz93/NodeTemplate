const Db = require('../config/db.config');
const Usuario = require('./usuario.model');


const models = {
    Usuario,
}

Db.models = { ...models };


module.exports = Db;





