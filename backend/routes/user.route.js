import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  login,
  updateUser,
} from '../controllers/user.controller.js';
import { auth, isAdmin } from '../middlewares/authentication.js';

const router = express.Router();

router.get('/', auth, isAdmin, getAllUsers);

router.get('/:id', auth, isAdmin, getUserById);

router.post('/signup', createUser);

router.post('/login', login);

router.put('/:id', auth, updateUser);

export default router;
