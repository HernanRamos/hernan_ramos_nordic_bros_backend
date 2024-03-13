const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;


const products = require("./routers/products");
const carts = require("./routers/carts");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", products, carts );




app.listen(PORT, () => {console.log("SERVIDOR FUNCIONANDO ✅");});