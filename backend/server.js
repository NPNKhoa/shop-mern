import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

import connectDB from './configs/dbConnection.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import orderRouter from './routes/order.route.js';
import cartRouter from './routes/cart.route.js';
import upload from './configs/multerConfig.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use('/api', (req, res, next) => {
  // Skip bodyParser for file upload routes
  if (req.path === '/products' && req.method === 'POST') {
    return next();
  }
  return bodyParser.json()(req, res, next);
});
app.use(logger('dev'));

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/cart', cartRouter);

app.use('/uploads', express.static(path.join(path.dirname(''), 'uploads')));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
