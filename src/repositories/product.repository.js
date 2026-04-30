import Product from '../models/Product.js';

class ProductRepository {
  async create(productData) {
    return await Product.create(productData);
  }

  async findAll(){
    return await Product.findAll();
  }
}

export default new ProductRepository();
