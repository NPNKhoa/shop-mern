import logError from '../helpers/logError.js';
import Order from '../models/order.model.js';

const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const { items, fullname, address, phone, paymentMethod } = req.body;

    if (!items || !fullname || !address || !phone || !paymentMethod) {
      return res.status(400).json({
        error: 'Request missing fields',
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        error: 'No items or invalid items',
      });
    }

    if (!address) {
      return res.status(400).json({
        error: 'Invalid address',
      });
    }

    const phoneRegex = /^(0|\+84)\d{9,10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        error: 'Invalid phone number format',
      });
    }

    const order = new Order();

    // add userId
    order.user = userId;

    // add items to orderItems
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      order.orderItems.push({
        product: item.product,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
      });
    }

    // add paymentMethod
    order.paymentMethod = paymentMethod;

    // add shippingAddress
    order.shippingAddress = {
      fullname,
      address,
      phone,
    };

    // calculate total price and asign its value to totalPrice
    order.totalPrice = items.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    const savedOrder = await order.save();

    res.status(201).json({
      data: savedOrder,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const getOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId });

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        error: 'Order not found',
      });
    }

    res.status(200).json({
      data: orders,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const getOrdersByAdmin = async (req, res) => {
  try {
    const orders = await Order.find();

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        error: 'Order not found',
      });
    }

    res.status(200).json({
      data: orders,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id: orderId } = req.params;
    const { isPaid, isDelivered } = req.body;

    if (!orderId) {
      return res.status(400).json({
        error: 'Missing orderId',
      });
    }

    const updatedOrder = await Order.findById(orderId);

    if (!updatedOrder) {
      return res.status(404).json({
        error: 'Order not found',
      });
    }

    if (typeof isPaid === 'boolean') {
      updatedOrder.isPaid = isPaid;
      updatedOrder.paidAt = isPaid ? Date.now() : null;
    }

    // Cập nhật trạng thái giao hàng
    if (typeof isDelivered === 'boolean') {
      updatedOrder.isDelivered = isDelivered;
      updatedOrder.deliveredAt = isDelivered ? Date.now() : null;
    }

    await updatedOrder.save();

    res.status(200).json({
      data: updatedOrder,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

export { createOrder, getOrders, getOrdersByAdmin, updateOrderStatus };
