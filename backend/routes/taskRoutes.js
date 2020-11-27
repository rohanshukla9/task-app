import express from 'express';
const router = express.Router();
import { createTask, getAuthUserTasks } from '../controllers/taskController.js'
import { protect } from '../middleware/protect.js'

router.route('/') .post(protect, createTask)
router.route('/mytasks').get(protect, getAuthUserTasks)

export default router