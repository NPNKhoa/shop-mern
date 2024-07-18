import express from 'express';
import { createOrder, getOrders } from '../controllers/order.controller.js';
import { auth } from '../middlewares/authentication.js';

const router = express.Router();

router.get('/', auth, getOrders);

router.post('/', auth, createOrder);

export default router;
