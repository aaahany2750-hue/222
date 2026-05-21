import User from '../models/User.js';

export const me = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

export const updateSettings = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.settings = { ...user.settings.toObject(), ...req.body };
  await user.save();
  res.json(user.settings);
};

export const adminDashboard = async (_req, res) => {
  const totalUsers = await User.countDocuments();
  const recentUsers = await User.find().select('name email role createdAt').sort({ createdAt: -1 }).limit(10);
  res.json({ totalUsers, recentUsers });
};
