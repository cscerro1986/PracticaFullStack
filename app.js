// require ('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');



const app = express();
const port =4000;

// const bodyParser = require('body-parser');



//CONTENIDO ESTATICO
app.use(express.static('public'))

//HANDLEBARS
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials/')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//REQUIERO EL MODULO ROUTER DONDE DEFINO LAS RUTAS
app.use(require ('./router/router'));



// app.get('/', function (req, res) {
//     res.render('home')
// })

// app.get('/Productos',function(req,res){
//     res.render('listaProductos',{
//         nombre :'Santuli'
//     })
// })

// app.get('/estadistica',function(req,res){
//     res.render('estadistica',{
//         nombre :'Santuli'
//     })
// })





// app.get('/mostrarMesas',function(req,res){
//     res.render('MostrarMesas',{
//         nombre :'Cerro Santaigo'
//     })
// })


// //LEER LISTA DE PRODUCTOS
// app.get('/Productos',(res,req)=>{
//     let data ={NombreProducto:req.body.producto.nombre}
//     let sql = "Select * from productos";
//     let query = conn.query(sql,(err, results)=>{
//         if(err) throw err;
//         res.render('/listaProductos');

//     });
// });




// //AGREGAR UN PRODUCTO
// app.post('/save',(res,req)=>{
//     console.log(req.body);
//     let data ={NombreProducto:req.body.producto.nombre}
//     let sql = `Insert into categoriaproducto SET ?`;
//     let query = conn.query(sql,(err, results)=>{
//         if(err) throw err;
//         res.send('recibido');
//     });
// });




// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('*', function (req, res) {
//   res.send('ERROR 404')
// })


// app.use(express.static('public'));

// app.get("/index",(req,res)=>{
//     res.sendFile(__dirname + "/public/index.html")
// })



app.listen(port,()=>{
    console.log(`vizualizando la pagina en : http://localhost:${port}`)
})




// "dotenv": {
//     "version": "10.0.0",
//     "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-10.0.0.tgz",
//     "integrity": "sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q=="
//   },