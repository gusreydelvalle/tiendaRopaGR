const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index", {titulo: "Mi titulo Dinámico"});
});

//LLamadas dinamicas a traves de la herramienta EJS, 
router.get("/productos",(req,res)=>{
    res.render("productos");
});

router.get("/proveedores",(req,res)=>{
    res.render("proveedores");
});

router.get("/ventas",(req,res)=>{
    res.render("ventas");
});

router.get("/reportes",(req,res)=>{
    res.render("reportes");
});

router.get("/login",(req,res)=>{
    res.render("login",);
});

module.exports = router;