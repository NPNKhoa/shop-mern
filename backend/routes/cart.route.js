import express from 'express';
import { auth } from '../middlewares/authentication.js';
import {
  addToCart,
  getCart,
  removeFromCart,
} from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/', auth, getCart);

router.post('/add', auth, addToCart);

router.delete('/remove', auth, removeFromCart);

export default router;
