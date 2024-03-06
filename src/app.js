const ProductManager = require("./ProductManager");
const express = require("express");
const app = express();
const productManager = new ProductManager();


app.get("/", async (req,res) => {
    res.json("⚔️ BIENVENIDO A NORDIC BROS ⚔️")})

    
app.get("/products", async (req,res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const products = await productManager.readProducts();
    if (limit) {
        const limited_products = [];
        for (let i = 0; i < limit && i < products.length; i++) {limited_products.push(products[i]);}
        res.json({ products: limited_products });} 
    else {res.json({ products });}})


app.get("/products/:productId", async (req,res) => {
    const productId = req.params.productId;
        const products = await productManager.readProducts();
        const product = products.find(p => Number(p.id) === Number(productId));
        if (product) {res.json({ product });}
        else{res.json({ error: "⛔ PRODUCTO NO ENCONTRADO ⛔" });}})

        
app.listen(8080, () => {console.log("SERVIDOR FUCIONANDO ✅");})