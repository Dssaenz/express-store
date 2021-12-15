const faker = require('faker')

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  };

  // Function to generate products using 'faker'
  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    };
  };

  createProduct(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body
    };
    this.products.push(newProduct);

    return this.products;
  };

  find() {
    return this.products;
  };

  findOne(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    }
    return this.products.find(item => item.id === id);
  };

  updateProduct(id, values) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...values,
    };

    return this.products[index];
  };

  deleteProduct(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);

    return { id };
  };
};

module.exports = ProductsServices;