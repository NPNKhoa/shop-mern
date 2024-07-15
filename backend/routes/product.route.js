import express from 'express';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/product.controller.js';
import upload from '../configs/multerConfig.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', upload.single('image'), addProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', upload.single('image'), updateProduct);

export default router;
