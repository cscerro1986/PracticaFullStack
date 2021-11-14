

//  var arrayMenu =
// [
//     {
//         id : "1",
//         Titulo :"MCNifica",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 0,
//         Precio :454.23
//     },
//     {
//         id : "2",
//         Titulo :"Hamburgueson",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 0,
//         Precio :454.23
//     },
//     {
//         id : "3",
//         Titulo :"chupala",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 1,
//         Precio :454.23
//     },
//     {
//         id : "4",
//         Titulo :"TapaArteria",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 2,
//         Precio :454.23
//     },
//     {
//         id : "5",
//         Titulo :"chupala",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 2,
//         Precio :454.23
//     },
//     {
//         id : "6",
//         Titulo :"TapaArteria",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 2,
//         Precio :454.23
//     },
//     {
//         id : "7",
//         Titulo :"chupala",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 2,
//         Precio :454.23
//     },
//     {
//         id : "8",
//         Titulo :"TapaArteria",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 3,
//         Precio :454.23
//     },
//     {
//         id : "9",
//         Titulo :"chupala",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 3,
//         Precio :454.23
//     },
//     {
//         id : "10",
//         Titulo :"TapaArteria",
//         Descripcion : "Es una rica hamburguesa llena de sabor"+" DESCRIPCION: ",
//         Imagen :"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUf0Vf/200/200/original?country=ar",
//         CodigoProducto: 3,
//         Precio :454.23
//     }
// ]


// const arrayProductos =["Hamburguesas","Pizzas","Bebidas","Postres"];
// const listaDinamica = document.getElementById('listaProductos');


// for (let index2 = 0; index2 < arrayProductos.length; index2++) 
// {
//     console.log(arrayProductos[index2])
//     listaDinamica.innerHTML += 
//         ` 
//         <tr>
//             <th scope="row" class="d-none d-lg-table-cell"></th>
//             <td colspan="3" class="categoria">${arrayProductos[index2]}</td>                    
//         </tr>
//         `
//     for (let index = 0; index < arrayMenu.length; index++)
//     { 
//         console.log("Entro")
//         const element = arrayMenu[index];

//         if(arrayMenu[index].CodigoProducto==index2)
//         {

//             listaDinamica.innerHTML += 
//                     ` 
//             <tr>
//                 <th scope="row" class="d-none d-md-table-cell">${arrayMenu[index].id}</th>
//                 <td>${arrayMenu[index].Titulo}</td>
//                 <td class="d-none d-md-table-cell">${arrayMenu[index].Descripcion}</td>
//                 <td><img src="${arrayMenu[index].Imagen}" alt=""></td>
//                 <td>${arrayMenu[index].Precio}</td>
                    
//                 <td class="tablaBoton">
//                     <select name="" id="" class="btn btn-secondary dropdown-toggle">
//                         <option value="">0</option>
//                         <option value="">1</option>
//                         <option value="">2</option>
//                         <option value="">3</option>
//                         <option value="">4</option>
//                         <option value="">5</option>
//                     </select>
                        
//                     <div >
//                         <button type="button" class="btn btn-primary">Agregar</button>
//                     </div>
//                 </td>
//             </tr>

//                 `
//         }
//     }
 
// }

// const container = document.querySelector('.contenedor');

// container.addEventListener('click', ()=>{
//     window.alert("asda");
// })

