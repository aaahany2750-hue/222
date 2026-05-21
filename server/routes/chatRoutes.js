import { Router } from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { chat } from '../controllers/chatController.js';

const router = Router();
router.post('/', protect, chat);
export default router;
