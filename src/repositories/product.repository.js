import Product from '../models/Product.js';

class ProductRepository {
  async create(productData) {
    return await Product.create(productData);
  }
}

export default new ProductRepository();
