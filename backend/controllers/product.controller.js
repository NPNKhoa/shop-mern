import mongoose from 'mongoose';
import logError from '../helpers/logError.js';
import Product from '../models/product.model.js';

const getAllProducts = async (req, res) => {
  try {
    const { name, category, page = 1, limit = 10 } = req.query;

    let query = {};

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    if (!products || products.length === 0) {
      return res.status(404).json({
        error: 'Product Not Found',
      });
    }

    const totalProducts = await Product.countDocuments(products);
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: products,
      error: false,
      meta: {
        totalDocs: totalProducts,
        totalPages,
      },
    });
  } catch (error) {
    logError(error, res);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: 'Missing id',
      });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: 'Invalid id format',
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        error: 'Product Not Found',
      });
    }

    res.status(200).json({
      data: product,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, category, new_price, old_price, available } = req.body;
    const image = req.file?.path;

    if (!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({
        error: 'Missing required field',
      });
    }

    const product = await Product.create({
      name,
      image,
      category,
      new_price,
      old_price,
      available,
    });

    if (!product) {
      return res.status(500).json({
        error: 'Fail to create product',
      });
    }

    res.status(201).json({
      data: product,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: 'Missing id',
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'Invalid id format',
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(500).json({
        error: 'Fail to delete product',
      });
    }

    res.status(200).json({
      data: deletedProduct,
      message: 'Delete product successfully!',
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, new_price, old_price, available } = req.body;
    let image;

    if (!id) {
      return res.status(400).json({
        error: 'Missing id',
      });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: 'Invalid product id',
      });
    }

    if (!(await Product.findById(id))) {
      return res.status(404).json({
        error: 'Product not found',
      });
    }

    if (req.file) {
      image = req.file.path;
    }

    const updateData = {
      ...(name && { name }),
      ...(category && { category }),
      ...(new_price && { new_price }),
      ...(old_price && { old_price }),
      ...(available !== undefined && { available }),
      ...(image && { image }),
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(500).json({
        error: 'Fail to update product',
      });
    }

    res.status(200).json({
      data: updatedProduct,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

export {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
