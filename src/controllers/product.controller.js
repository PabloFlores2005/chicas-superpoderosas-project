import productService from '../services/product.service.js';

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllProducts(req , res){
    try {
      const products = await productService.getAllProducts();

      res.status(200).json(products);
    } catch (error){
      res.status(500).json({error: error.message});
    }
  }
}

export default new ProductController();
