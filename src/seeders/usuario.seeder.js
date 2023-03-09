const { usuarioData } = require('../data');
const Db = require('../models');

const UsuarioSeeder = async () => {
    await Db.model('Usuario').destroy({ where: {} });
    await Db.model('Usuario').bulkCreate(usuarioData);
}

module.exports = UsuarioSeeder;