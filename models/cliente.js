//Aca crearemos el modelo de datos del cliente
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Aqui creamos el esquema de datos del cliente
const clienteSchema = new Schema({
        nombre: String,
        apellidos: String,
        cel: Number 
});

//Llamado del Modelo

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;