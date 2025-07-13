import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true }], // ✅ changed to array
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stripePaymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'usd' },
  status: {
    type: String,
    enum: ['pending', 'succeeded', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);

export default Payment;
