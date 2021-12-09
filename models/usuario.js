
//Aca crearemos el modelo de datos del usuario
const mongoose = require('mongoose');
const SchemaU = mongoose.Schema;

//Aqui creamos el esquema de datos del cliente
const usuarioSchema = new SchemaU({
        nombre: String,
        alias: String,
        password: String 
});

//Llamado del Modelo

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;