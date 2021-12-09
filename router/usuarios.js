//Este es el controlador principal de usuarios
const express = require('express');
const router = express.Router();
//Aca llamaremos el modelo de datos
const Usuario = require('../models/usuario');
router.get('/', async (req, res) => {
    try {
        const arrayUsuariosDB = await Usuario.find();
        console.log(arrayUsuariosDB)
        res.render("usuarios", {
            arrayUsuarios: arrayUsuariosDB 
            //Aqui igualamos la estructura de datos con lo traido de la base datos

        })

    } catch (error) {
        console.log(error)
    }

})
//Aqui vamos a llamar la vista crear de nuevos clientes
router.get('/crearU', (req,res)=>{
    res.render('crearU')
}) 
//Aqui vamos a llamar la ruta de los datos y conectar con la bd
router.post('/', async(req, res)=>{
    const body = req.body
    
    try{
            const usuarioDB = new Usuario(body)//Aqui recibo lo que trajo boy-parser
            await usuarioDB.save()//aqui lo guardo en la base datos
            console.log(body) //Aqui me muestra en consola lo que guardo en la base datos
            //await Cliente.create(body) Esta es la segunda forma de guardar datos en la base de datos
            res.redirect('/usuarios')
    }catch(error){
        console.log(error)
    }
})
//Detallar el cliente y unificar un documento para editar y para borrar
router.get('/:id', async(req, res)=>{
    const id= req.params.id
    try{
        const usuarioDB = await Usuario.findOne({_id: id})
        console.log(usuarioDB)
        res.render('detalle',{
            usuario : usuarioDB,
            error:false
        })
    }catch(error){
        res.render('detalle',{
           error: true,
           mensaje: 'No se encuentra el id escogido'
    })
}
})

//vamos a borrar el cliente con Delete
router.delete('/:id', async(req, res)=>{
    const id= req.params.id
    try {
        const usuarioDB= await Usuario.findByIdAndDelete({_id: id})
        if (usuarioDB) {
            res.json({
                estado: true,
                mensaje : 'Eliminado!!'
            })
        } else {
            res.json({
                estado : false,
                mensaje : 'No se pudo eliminar'
            })
        }
    } catch (error) {
        console.log(error)
    }
})
//Aqui vamos a editar los clientes creados

router.put('/:id', async (req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        const usuarioDB = await Usuario.findByIdAndUpdate(
            id, body, {useFindAndModify: false}) 
            console.log(usuarioDB)
            res.json({
                estado: true,
                mensaje : 'Editado'
            })

    } catch (error) {
        res.json({
            estado: false,
            mensaje : 'Ha fallado'
        })
        console.log(error)
    }
})


module.exports = router;