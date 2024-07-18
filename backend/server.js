import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDB from './configs/dbConnection.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import orderRouter from './routes/order.route.js';

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
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
