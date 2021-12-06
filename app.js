
//Construccion del servidor en Express

const express = require("express");
const { nextTick } = require("process");
const app = express();

//Puerto
const port = 2022;

//Llamado al motor de plantillas de EJS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

//Configurar carpeta publica y configurar un middleware
app.use(express.static(__dirname + "/public"))

//Llamado a la raiz del proyecto

//Estas son las rutas de mi proyecto para las paginas estaticas, es decir, si mantuviera la carpeta public inicialmente - El siguiente codigo se comentarea para empezar a configurar las paginas de manera dinamica

/*app.get("/",(req,res)=>{
    res.send("Mi pagina con Express meras locas ome")
})*/

//configuracion de enrutamiento de paginas dinamicamente
app.get("/",(req,res)=>{
    res.render("index", {titulo: "Mi titulo Dinámico"});
});

//LLamadas dinamicas a traves de la herramienta EJS, 
app.get("/productos",(req,res)=>{
    res.render("productos", {tituloP: "Mi titulo Dinámico de Productos"});
});

app.get("/clientes",(req,res)=>{
    res.render("clientes", {tituloC: "Gestor Dinámico de Clientes"});
});

app.get("/usuarios",(req,res)=>{
    res.render("usuarios", {tituloU: "Mi titulo Dinámico de Usuarios"});
});

app.get("/proveedores",(req,res)=>{
    res.render("proveedores", {tituloProv: "Gestor Dinámico de Proveedores"});
});

app.get("/ventas",(req,res)=>{
    res.render("ventas");
});

app.get("/reportes",(req,res)=>{
    res.render("reportes");
});

app.get("/login",(req,res)=>{
    res.render("login",);
});




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