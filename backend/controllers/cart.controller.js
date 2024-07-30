import logError from '../helpers/logError.js';
import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({
        error: 'Missing fields',
      });
    }

    if (quantity <= 0) {
      return res.status(400).json({
        error: 'Quantity must be greater than 0',
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, cartItems: [] });
    }

    const productIndex = cart.cartItems.findIndex((item) =>
      item.product.equals(productId)
    );

    if (productIndex !== -1) {
      cart.cartItems[productIndex].quantity += quantity;
      cart.cartItems[productIndex].totalPrice =
        cart.cartItems[productIndex].quantity * product.new_price;
    } else {
      cart.cartItems.push({
        product: productId,
        quantity,
        totalPrice: quantity * product.new_price,
      });
    }

    cart.totalCartPrice = cart.cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    cart.totalItems = cart.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    await cart.save();

    res.status(201).json({
      data: cart,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        error: 'Request missing fields',
      });
    }

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        error: 'Cart not found',
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
      });
    }

    cart.cartItems = cart.cartItems.filter(
      (item) => !item.product.equals(productId)
    );

    cart.totalCartPrice = cart.cartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    await cart.save();

    res.status(200).json({
      cart,
      deletedItem: product,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId }).populate(
      'cartItems.product'
    );

    if (!cart) {
      return res.status(404).json({
        error: 'Cart not found',
      });
    }

    res.status(200).json({
      data: cart,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

export { addToCart, removeFromCart, getCart };
