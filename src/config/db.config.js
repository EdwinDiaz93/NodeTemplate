const { Sequelize } = require('sequelize');


const Db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    loggin: false,
    define: {
        freezeTableName: true,
        timestamps: false,

    }
});


module.exports = Db;