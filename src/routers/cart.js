const { Router } = require("express");
const router = Router();
const carts = [];


router.post("/carts",(req,res) => {
    const new_cart = {
        id: "2255",
        products: [],};
    carts.push(new_cart)
    res.status(201).json(new_cart);});


router.get("/carts", (req, res) => {
    res.status(200).json(carts);});


router.get("/carts/:cartsId",(req, res) => {
    const cart_id = req.params.cartsId;
    const cart = carts.find((cart) => cart.id === cart_id);
    if (cart) {res.status(200).json(cart.products);} 
    else{res.status(404).json({ error: "⛔ CARRITO NO ENCONTRADO ⛔" });}});


router.post("/carts/:cartsId/products/:productId",(req, res) => {
    const cart_id = req.params.cartsId;
    const product_id = req.params.productId;
    const quantity = req.body.quantity;
    const cart = carts.find((cart) => cart.id === cart_id);

    if (!cart) {
    return res.status(404).json({ error: "⛔ CARRITO NO ENCONTRADO ⛔" });}

    const product_cart = cart.products.findIndex((product) => product.product === product_id);

    if (product_cart !== -1) {cart.products[product_cart].quantity += quantity;}
    else{cart.products.push({ product: product_cart, quantity });}
    res.status(201).json(cart.products);});




module.exports = router;