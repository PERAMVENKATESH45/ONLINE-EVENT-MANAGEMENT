import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ticketType: {
    type: String,
    enum: ['General', 'vip'],
    default: 'General',
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalAmount: { type: Number }, // Optional for frontend display
  status: {
    type: String,
    enum: ['pending', 'booked', 'cancelled', 'transferred'],
    default: 'pending',
  },
  paymentIntentId: String, // Stripe payment intent id
}, { timestamps: true });

// Optional: Automatically calculate totalAmount before saving
ticketSchema.pre('save', function (next) {
  this.totalAmount = this.price * this.quantity;
  next();
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
