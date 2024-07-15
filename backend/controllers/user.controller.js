import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import logError from '../helpers/logError.js';
import User from '../models/user.model.js';

const getAllUsers = async (req, res) => {
  try {
    const { email, name, page = 1, limit = 10 } = req.query;
    let query = {};

    if (email) {
      query.email = email;
    }

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    if (!users || users.length === 0) {
      return res.status.json({
        error: 'Users not found',
      });
    }

    const totalUsers = await User.countDocuments(users);
    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).json({
      data: users,
      error: false,
      meta: {
        totalDoc: totalUsers,
        totalPages,
      },
    });
  } catch (error) {
    logError(error, res);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({
        error: 'Missing id',
      });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res.status(401).json({
        error: 'Invalid user id',
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    res.status(200).json({
      data: user,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, isAdmin, phone } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      return res.status(400).json({
        error: 'Invalid Email',
      });
    }

    const checkUser = await User.findOne({
      email,
    });

    if (checkUser) {
      return res.status(409).json({
        error: 'Email already exist',
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: 'Passwords do not match',
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      phone,
    });

    if (!createdUser) {
      return res.status(500).json({
        error: 'Fail to create user',
      });
    }

    const token = jwt.sign({ email: createdUser.email }, process.env.SECRET, {
      expiresIn: '7d',
    });

    const responseData = {
      name,
      token,
    };

    res.status(201).json({
      data: responseData,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkedUser = await User.findOne({ email });

    if (!checkedUser) {
      return res.status(404).json({
        error: 'Email does not exist',
      });
    }

    const verifiedPassword = bcrypt.compareSync(password, checkedUser.password);

    if (!verifiedPassword) {
      return res.status(401).json({
        error: 'Email or Password is incorrect',
      });
    }

    const token = jwt.sign({ email: checkedUser.email }, process.env.SECRET);
    console.log('token: ' + token);

    res.status(200).json({
      data: {
        name: checkedUser.name,
        token,
        error: false,
      },
    });
  } catch (error) {
    logError(error, res);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    if (!id) {
      return res.status(401).json({
        error: 'Missing id',
      });
    }

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: 'Invalid id',
      });
    }

    if (!(await User.findById(id))) {
      return res.status(404).json({
        error: 'User Not Found',
      });
    }

    const updatedData = {
      ...(name && { name }),
      ...(email && { email }),
      ...(phone && { phone }),
    };

    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({
        error: 'No data provided for update',
      });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(500).json({
        error: 'Failed to update user',
      });
    }

    res.status(200).json({
      data: updatedUser,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

export { createUser, login, updateUser, getAllUsers, getUserById };
