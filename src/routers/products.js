const { Router } = require("express");
const router = Router();


const products = [
{id:0,title:"BIDON BLACK",description:"NEGRO",price:4500,thumbnail:"../public/img/1A.png", code:"",stock:20}, 
{id:1,title:"BIDON PURPLE",description:"VIOLETA",price:4500,thumbnail:"../public/img/2A.png", code:"",stock:20}, 
{id:2,title:"BIDON NEON",description:"AMARILLO",price:4500,thumbnail:"../public/img/3A.png", code:"",stock:15}, 
{id:3,title:"BIDON PINK",description:"ROSA",price:4500,thumbnail:"../public/img/4A.png", code:"",stock:5}, 
{id:4,title:"BIDON CAMEL",description:"BEIGE",price:4500,thumbnail:"../public/img/5A.png", code:"",stock:5}, 
{id:5,title:"BARRAS ENERGETICAS",description:"",price:5000,thumbnail:"../public/img/promo_king.png", code:"",stock:8},];


router.get("/products",(req,res) => {
    res.status(200).json(products)});


router.get("/products",(req,res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const products = products.readProducts();
    if (limit) {
        const limited_products = [];
        for (let i = 0; i < limit && i < products.length; i++) {limited_products.push(products[i]);}
        res.status(200).json(limited_products);}
        else {res.status(200).json(products);}});
    
    
router.get("/products/:productId",(req,res) => {
    const productId = req.params.productId;
    const product = products.find(p => Number(p.id) === Number(productId));
    if (product) {res.send({ product });}
    else{res.json({ error: "⛔ PRODUCTO NO ENCONTRADO ⛔" });}})


router.post("/products", (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;
    if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
      res.status(400).json({ error: "⚠️ TODOS LOS CAMPOS SON OBLIGATORIOS ⚠️" });
      return;}
    const new_product = {
      id: products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      status: true};
products.push(new_product)
res.status(201).json(new_product);});


router.put("/products/:productId",(req,res) => {
    const { body, params } = req;
    const product_id = params.productId
    const position = products.findIndex((p) => {
        return p.id === parseInt (product_id);});
    if (position === -1) {
        res.status(404).json({ error: "⛔ PRODUCTO NO ENCONTRADO ⛔" });
        return;}
    else{
        if (body.id && body.id !== parseInt(product_id)) {
            res.status(400).json({ error: "⚠️ PROHIBIDO CAMBIAR ESTE PARAMETRO ⚠️" });
            return;}
        const updated_product = {
          ...body,
          id: parseInt(product_id),};
        products[position] = updated_product;
        res.status(200).json({ message: "♻️ PRODUCTO ACTUALIZADO CORRECTAMENTE ♻️" });}});
    

router.delete('/products/:productId', (req, res) => {
    const { params } = req;
    const product_id = params.productId
    const position = products.findIndex((p) => p.id === parseInt(product_id));
    if (position === -1) {
        res.status(404).json({ error: "⛔ PRODUCTO NO ENCONTRADO ⛔" });
        return;}
    else{products.splice(position, 1)
        res.status(200).json({ message: "🧻 PRODUCTO ELIMINADO CORRECTAMENTE 🧻" })}});




module.exports = router;