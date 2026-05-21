import { Router } from 'express';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { me, updateSettings, adminDashboard } from '../controllers/userController.js';

const router = Router();
router.get('/me', protect, me);
router.put('/settings', protect, updateSettings);
router.get('/admin', protect, adminOnly, adminDashboard);
export default router;
