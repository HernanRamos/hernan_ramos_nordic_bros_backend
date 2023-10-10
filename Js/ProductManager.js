const fs = require("fs");

class ProductManager {
    constructor (path) {
        this.path = path;
        this.id = 0;}

    async getProducts() {
        if (!fs.existsSync(this.path)) return [];
        const content = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(content);}

    async saveProducts(data) {
        const content = JSON.stringify(data, null, "\t");
        await fs.promises.writeFile(this.path, content, "utf-8");}

    async addProduct(data) {
        const { title, description, price, thumbnail, code, stock } = data;
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios ⚠️");
            return;}

    const newProduct = {
        id: ++this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock};
    const products = await this.getProducts();
    products.push(newProduct);

    await this.saveProducts(products);
    console.log("El Producto se agrego correctamente ✅");}

    async get() {return this.getProducts();}
    
    updateProduct(id, data) {
        const { title, description, price, thumbnail, code, stock } = data;
        const products = addProduct(this.path);
        const product = products.find((p) => p.id === id);
        if(!product){
            console.error("Producto no encontrado ⛔");}}}





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
    console.log(await product_manager.get());}

test();


//node Js/ProductManager.js