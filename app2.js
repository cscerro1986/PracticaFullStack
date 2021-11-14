const express = require('express');
const hbs = require('hbs');
const app = express();
const port =5000;

const mssql = require('mssql');

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'db_resto'
    
})


//CONTENIDO ESTATICO
app.use(express.static('public'))

//HANDLEBARS
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials/')





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

//Intento para usar ms sql
// app.get('/',(req,res)=>{

//     var config = {
//         user: 'Gisel Morel',
//         password: '',
//         server: 'localhost', 
//         database: 'DB_Resto' 
//     };
    
//     mssql.connect(config,(err)=>{
//         if(err) console.log(err)
    
//         var request = new mssql.Request();
//         var query ="Select * from Producto"
//         request.query(query,(er,results)=>{
//             if(er) console.log(er)
    
//             console.log(results);
            
//         })
//     })
// });



// //LEER LISTA DE PRODUCTOS
app.get('/',(res,req)=>{

    let sql = "Select * from producto";
    let query = conn.query(sql,(err, results)=>{
        if(err) throw err;
        console.log(results);
    });
});


//AGREGAR UN PRODUCTO
// app.post('/save',(res,req)=>{
//     let data ={NombreProducto:req.body.producto.nombre}
//     let sql = "Insert into categoriaproducto SET ?";
//     let query = conn.query(sql,(err, results)=>{
//         if(err) throw err;
//         res.redirect('/');
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


