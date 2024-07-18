import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
      },
    ],
    totalCartPrice: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Cart', CartSchema);
