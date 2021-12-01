
//Construccion del servidor en Express

const express = require("express");
const { nextTick } = require("process");
const app = express();

//Puerto
const port = 2022;

//Configurar carpeta publica y configurar un middleware
app.use(express.static(__dirname + "/public"))




//Llamado a la raiz del proyecto

//Estas son las rutas de mi proyecto
app.get("/",(req,res)=>{
    res.send("Mi pagina con Express meras locas ome")
})



app.get("/productos",(req,res)=>{
    res.send("<h1 align = center>Hola esta es la pagina de Productos</h1>")
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html");
})

app.listen(port,()=>{
    console.log(`Este es un llamado del servidor en http://localhost:${port}`);
})