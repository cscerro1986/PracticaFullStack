const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');
const { json } = require('body-parser');

//FUNCIONA
// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_resto'
  })
  
  conn.connect((err) => {
    if (err) throw err;
    console.log("CONEXION ESTABLECIDA...");
  });


// De esta forma renderizo la pagina listaProductos pero sin los productos de la base de datos
// VIEWS
// router.get('/Productos',(req, res) => {
//        res.render('listaProductos');
// });

router.get('/',(req, res) => {
    res.render('home');
});

router.get('/mostrarMesas',(req, res) => {
  res.render('MostrarMesas');
});

router.get('/estadistica',(req, res) => {
  res.render('estadisticas');
});


router.get('/Pedidos',(req, res) => {
  res.render('cargarPedido');
});






// SELECT 
router.get('/Productos', (req, res) => {
  let sqlCategoria = "SELECT * FROM categoriaproducto";
  let queryCategoria = conn.query(sqlCategoria, (errCat, resultsCategoria) => 
  {
    if(errCat) throw errCat;        
      let sql = "SELECT * FROM producto";
      let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('../views/listaProductos', {
          results: results,
          resultsCategoria:resultsCategoria
      });
    });
  });
});

// Insertar Producto FALTA AGREGAR LAS CATEGORIAS POR BASE DE DATOS
router.post('/save', (req, res) => {
    let data = { NombreProducto: req.body.pn, DescripcionProducto: req.body.pd, EstadoProducto : req.body.pe , PathImagenProducto : req.body.pp,
      idCategoriaProducto : req.body.pc, Precio : req.body.precio 
       };
    let sql = "INSERT INTO producto SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('Productos');
    });
});


// Insertar Categoria Producto
router.post('/saveCategoria', (req, res) => {
  const btn =req.body.categoria;
  console.log(btn);
  let data = { NombreProducto: req.body.categoria
     };
  let sql = "INSERT INTO categoriaproducto SET ?";
  let query = conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect('Productos');
  });
});

//UPDATE
router.post('/update', (req, res) => {
    let sql = "UPDATE producto SET NombreProducto='" + req.body.pn + "', Precio='" + req.body.precio +
    "', DescripcionProducto='" + req.body.pd +"', EstadoProducto='" + req.body.pe +"', PathImagenProducto='" + req.body.pp 
    +"', idCategoriaProducto='" + req.body.pc+ "' WHERE idProducto=" + req.body.idProducto;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('Productos');
    });
});

// DELETE
router.post('/borrar', (req, res) => {  
    let sql = "DELETE FROM producto WHERE idProducto=" + req.body.idProducto + "";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('Productos');
    });
});


    //Envio de mail

    // router.get('/contacto',(req, res) => {
    //     res.render('contacto');
    // });
    
    
    //     router.post("/send-email",(req, res) =>{
    //     const transporter = nodemailer.createTransport({
    //         host:"smtp.ethereal.email",
    //         port:"587",
    //         secure:false,
    //         auth: {
    //         user: 'omari.bahringer60@ethereal.email',
    //         pass: 'Ph7WjQGseTV7wB3HXq'
    //     }
    //     })
    //     const mailOptions={
    //         from: "Remitente <omari.bahringer60@ethereal.email>",
    //         to:"naranjaspintdas@gmail.com",
    //         subject: "Enviado desde nodemailer",
    //         text:"¡Hola mundo!"
    //     };
    //     transporter.sendMail(mailOptions,(error, info)=>{
    //         if(error){
    //         res.status(500).send(error.message);
    //             }else{
    //             console.log("Email enviado")
    //             res.status(200).jsonp(reqbody);
    //             }
    //     });
    // });
    

module.exports = router;