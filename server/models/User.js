import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    notifications: [{ message: String, read: { type: Boolean, default: false }, createdAt: { type: Date, default: Date.now } }],
    settings: {
      theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
      chatbotTone: { type: String, default: 'professional' }
    }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
