import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

router.post('/', productController.createProduct);

router.get('/', productController.getAllProducts);

router.put('/:id', productController.updateProduct);

export default router;
