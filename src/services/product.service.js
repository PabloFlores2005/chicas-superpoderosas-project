import productRepository from '../repositories/product.repository.js';

class ProductService {
  async createProduct(data) {
    if (!data.name || data.price === undefined) {
      throw new Error('Name and price are required');
    }
    if (data.price < 0) {
      throw new Error('Price cannot be negative');
    }
    return await productRepository.create(data);
  }


  async getAllProducts(){
    return await productRepository.findAll();
  }

  async updateProduct(id, data) {
    if (data.price < 0) {
      throw new Error('Price cannot be negative');
    }
    return await productRepository.update(id, data);
  }
}

export default new ProductService();
