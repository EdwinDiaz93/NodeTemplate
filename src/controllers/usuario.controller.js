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
            return res.status(200).json({
                ok: true,
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