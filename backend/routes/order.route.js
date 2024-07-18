import express from 'express';
import {
  createOrder,
  getOrders,
  getOrdersByAdmin,
  updateOrderStatus,
} from '../controllers/order.controller.js';
import { auth, isAdmin } from '../middlewares/authentication.js';

const router = express.Router();

router.get('/', auth, getOrders);

router.get('/admin', auth, isAdmin, getOrdersByAdmin);

router.post('/', auth, createOrder);

router.put('/:id', auth, isAdmin, updateOrderStatus);

export default router;
