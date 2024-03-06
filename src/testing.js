const ProductManager = require("./ProductManager");

async function test() {
    const product_manager = new ProductManager("Product.json");
    const data = {
        title: "BIDON BLACK",
        description: "Capacidad de 1.6L",
        price: 4500,
        thumbnail: "../img/1A.png",
        code: "NEGRO",
        stock: 20};
    await product_manager.addProduct(data);
    console.log(await product_manager.get());
    await product_manager.updateProduct(1, {code: "ROSA", thumbnail: "../img/4A.png" });
    console.log(await product_manager.get());
    await product_manager.deleteProduct(1);
    console.log(await product_manager.get());}
test();