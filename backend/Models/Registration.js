import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }], // ✅ Changed to array
  ticketType: { type: String, required: true }, // Optional: store type used
  quantity: { type: Number, required: true },   // Optional: store count
  paymentId: { type: String },                  // Store Stripe payment ID
  registeredAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);
export default Registration;
