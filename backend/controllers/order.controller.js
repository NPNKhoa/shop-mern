import logError from '../helpers/logError.js';
import Order from '../models/order.model.js';

const createOrder = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    logError(error, res);
  }
};

const getOrders = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    logError(error, res);
  }
};

export { createOrder, getOrders };
