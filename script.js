class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProductos() {
    return this.productos;
  }

  agregarProducto(nombre, descripcion, precio, imagen, codigo, stock) {
    let id_producto = this.getProductos().length;

    let producto = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
      codigo: codigo,
      stock: stock,
      id: ++id_producto,
    };

    if (
      !producto.title ||
      !producto.description ||
      !producto.price ||
      !producto.thumbnail ||
      !producto.code ||
      !producto.stock
    ) {
      return console.log("Todos los campos son obligatorios");
    }
    let codigo = this.productos.find(
      (element) => element.codigo == producto.codigo
    );
    if (codigo) {
      return console.log(
        "El 'codigo' del producto ya existe, intente cambiarlo."
      );
    } else {
      this.productos.push(producto);
      return this.productos;
    }
  }

  getProductsById(id_producto) {
    let producto = this.productos.find(
      (producto) => producto.id === id_producto
    );

    if (producto) {
      return producto;
    } else {
      return console.log("not found");
    }
  }
}

const nuevoProd = new ProductManager();
nuevoProd.agregarProducto(
  "Prueba",
  "prueba de producto",
  500,
  "imagen",
  "odn515",
  10
);
console.log(nuevoProd.getProductos());
