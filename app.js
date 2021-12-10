
//Construccion del servidor en Express

const express = require("express");
const { nextTick } = require("process");
const bodyParser = require('body-parser');
const app = express();
//Puerto
const port = 2022;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Conectar a Base Datos 
const mongoose = require ('mongoose');
const usuario='';
const password='';
const dbName='tienda'; 

const uri =  `mongodb://localhost:27017/tienda`

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Conexion con la base de datos de manera exitosa'))
.catch(e=> console.log('el error de conexión es ',e));


//Llamado al motor de plantillas de EJS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

//Configurar carpeta publica y configurar un middleware
app.use(express.static(__dirname + "/public"))

//Rutas web
app.use('/', require('./router/rutasWeb'));
app.use('/clientes', require('./router/clientes'));
app.use('/usuarios', require('./router/usuarios'));


//Llamado a la raiz del proyecto

//Estas son las rutas de mi proyecto para las paginas estaticas, es decir, si mantuviera la carpeta public inicialmente - El siguiente codigo se comentarea para empezar a configurar las paginas de manera dinamica

/*app.get("/",(req,res)=>{
    res.send("Mi pagina con Express meras locas ome")
})*/

//configuracion de enrutamiento de paginas dinamicamente





//Este era el llamado cuando tenia los datos en la carpeta public o cuando queria llamar un aviso
/*
app.get("/productos",(req,res)=>{
    res.send("<h1 align = center>Hola esta es la pagina de Productos</h1>")
});*/

app.use((req,res,next)=>{
    res.status(404).render("404",{titulo404: "Pagina dinamica no encontrada"} );
})

app.listen(port,()=>{
    console.log(`Este es un llamado del servidor en http://localhost:${port}`);
})