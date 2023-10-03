class ProductManager {
    constructor () {
        this.products = [];}

    getProducts () {
        return this.products;}

    addProduct (title, description, price, thumbnail, code, stock) {
    if (!title, !description, !price, !thumbnail, !code, !stock) {
        console.error("Todos los campos son obligatorios");
        return;
    }
    const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      console.log("Producto agregado")
     }
     getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error("Producto no encontrado");}
        return product;
    }
}

const product_manager = new ProductManager();
console.log(product_manager.getProducts());
product_manager.addProduct("BIDON BLACK", "Bidon de material plástico resistente con capacidad de 1.6L", 4500, "../img/1A.png", "NEGRO", 20);
console.log(product_manager.getProducts());
console.log(product_manager.getProductById(1));
console.log(product_manager.getProductById(9));

