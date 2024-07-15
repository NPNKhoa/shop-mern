import logError from '../helpers/logError.js';
import User from '../models/user.model.js';

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

    const createdUser = await User.create({
      name,
      email,
      password,
      confirmPassword,
      isAdmin,
      phone,
    });

    if (!createdUser) {
      return res.status(500).json({
        error: 'Fail to create user',
      });
    }

    res.status(201).json({
      data: createdUser,
      error: false,
    });
  } catch (error) {
    logError(error, res);
  }
};

export { createUser };
