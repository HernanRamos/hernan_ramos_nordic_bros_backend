const array_productos = [
{id:0, nombre:"BIDON BLACK", color:"NEGRO", precio: 4500, img:"../img/1A.png"},
{id:1, nombre:"BIDON PURPLE", color:"VIOLETA", precio: 4500, img:"../img/2A.png"},
{id:2, nombre:"BIDON NEON", color:"AMARILLO", precio: 4500, img:"../img/3A.png"},
{id:3, nombre:"BIDON PINK", color:"ROSA", precio: 4500, img:"../img/4A.png"},
{id:4, nombre:"BIDON CAMEL", color:"BEIGE", precio: 4500, img:"../img/5A.png"},
{id:5, nombre:"BARRAS ENERGETICAS", color:" ", precio: 5000, img:"../img/Promo_King.png"}];

let producto_id = 3; 

function callback (currentProducto) {
    return currentProducto.id === producto_id;
}

let producto = array_productos.find(callback);

console.log(producto);
