const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Aqui creamos el esquema de datos del cliente
const usuarioSchema = new Schema({
        nombre: String,
        alias: String,
        password: String 
});

//Llamado del Modelo

const Cliente = mongoose.model('Usuario', usuarioSchema);

module.exports = Cliente;