import jwt from 'jsonwebtoken';

import logError from '../helpers/logError.js';
import User from '../models/user.model.js';
import { logout } from '../controllers/user.controller.js';

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        error: 'Access denined! No token provided',
      });
    }

    jwt.verify(token, process.env.SECRET, async (error, payload) => {
      if (error) {
        logout();
        return res.status(401).json({
          error: 'Invalid Token!',
        });
      }

      const email = payload.email;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({
          error: 'Authenticated user not found',
        });
      }

      req.user = user;

      next();
    });
  } catch (error) {
    logError(error, res);
  }
};

const isAdmin = (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        error: 'User is not authenticated',
      });
    }

    if (user.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        error: 'Access denined! Admins only',
      });
    }
  } catch (error) {
    logError(error, res);
  }
};

export { auth, isAdmin };
