import { generateAIReply } from '../services/aiService.js';

export const chat = async (req, res) => {
  const { message, tone } = req.body;
  if (!message) return res.status(400).json({ message: 'Message is required' });
  const reply = await generateAIReply(message, tone);
  res.json({ reply });
};
