const fs = require("fs").promises;

class ProductManager {
    constructor (path) {
        this.path = "../data/products.json";
        this.id = 0;}

    async getProducts() {
        if (!fs.existsSync(this.path)) return [];
        const content = await fs.readFile(this.path, "utf-8");
        return JSON.parse(content);}

    async saveProducts(data) {
        const content = JSON.stringify(data, null, "\t");
        await fs.promises.writeFile(this.path, content, "utf-8");}

    async addProduct(data) {
        const { title, description, price, thumbnail, code, stock } = data;
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios ⚠️");}

    const new_product = {
        id: ++this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock};
    const products = await this.getProducts();
    products.push(new_product);

    await this.saveProducts(products);
    console.log("El Producto se agrego correctamente ✅");}

    async get() {return this.getProducts();}
    
    async updateProduct(id, data) {
        const { title, description, price, thumbnail, code, stock } = data;
        const products = await this.getProducts();
        const index = products.findIndex((p) => p.id === id);
        if(index === -1){
            throw new Error("Producto no encontrado ⛔");}
        if (title){products[index].title = title;}
        if (description){products[index].description = description;}
        if (price){products[index].price = price;}
        if (thumbnail){products[index].thumbnail = thumbnail;}
        if (code){products[index].code = code;}
        if (stock){products[index].stock = stock;}
        await this.saveProducts(products);
        console.log("El Producto se actualizo correctamente ♻️");}
    
    async deleteProduct(id) {
        const products = await this.getProducts();
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new Error("Producto no encontrado ⛔");}
        products.splice(index, 1);
        await this.saveProducts(products);
        console.log("El Producto se eliminó correctamente ⛔");}
        
    async readProducts() {
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);}}

module.exports = ProductManager;

