const { request, response } = require('express');
const { usuarioData } = require('../data');

const Db = require('../models');

class UsuarioController {

    static async getUsuarios(req = request, res = response) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (page - 1) * limit;
            const { count, rows } = await Db.model('Usuario').findAndCountAll({
                offset,
                limit,
            });

            const from = offset + 1;
            const to = limit * page;
            const lastPage = Math.ceil(count / limit);

            const usuarios = {
                totalrows: count,
                firstPage: 1,
                lastPage,
                from,
                to,
                rows,
            }

            return res.status(200).json(usuarios);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Internal Server Error'
            })

        }
    }

    static async getUsuario(req = request, res = response) {
        try {
            const { id } = req.params;
            const usuarioDb = await Db.model('Usuario').findByPk(id);
            if (!usuarioDb)
                return res.status(404).json({
                    ok: false,
                    msg: `Usuario con id: ${id} no encontrado`,
                });

            return res.status(200).json(usuarioDb);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Internal Server Error'
            })

        }
    }

    static async saveUsuario(req = request, res = response) {
        try {

            const { email, username, password } = req.body;

            const usuario = { email, username, password };

            await Db.model('Usuario').create(usuario);

            return res.status(200).json({
                ok: true,
                msg: 'Usuario creado correctamente',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Internal Server Error'
            })

        }
    }

    static async updateUsuario(req = request, res = response) {
        try {
            const { id } = req.params;
            const usuarioDb = await Db.model('Usuario').findByPk(id);
            if (!usuarioDb)
                return res.status(404).json({
                    ok: false,
                    msg: `Usuario con id: ${id} no encontrado`,
                });

                
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Internal Server Error'
            })

        }
    }

    static async deleteUsuario(req = request, res = response) {
        try {

            const { id } = req.params;
            const usuarioDb = await Db.model('Usuario').findByPk(id);
            if (!usuarioDb)
                return res.status(404).json({
                    ok: false,
                    msg: `Usuario con id: ${id} no encontrado`,
                });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Internal Server Error'
            })

        }
    }

    static async seedUsuario(req = request, res = response) {
        await Db.model('Usuario').destroy({ where: {} });
        await Db.model('Usuario').bulkCreate(usuarioData);
        res.send('Seed executed');
    }

}
module.exports = UsuarioController;