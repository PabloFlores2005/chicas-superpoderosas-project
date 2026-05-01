import Product from '../models/Product.js';

class ProductRepository {
  async create(productData) {
    return await Product.create(productData);
  }

  async findAll(){
    return await Product.findAll();
  }

  async update(id, productData) {
    return await Product.update(productData, { where: { id } });
  }
}

export default new ProductRepository();
