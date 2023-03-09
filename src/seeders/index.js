const UsuarioSeeder=require('./usuario.seeder');


const Seeder = async () => {
    await UsuarioSeeder();
}

module.exports = Seeder;