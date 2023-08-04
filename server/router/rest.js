import express from 'express';
const router = express.Router();
import {
  createData,
  getData,
  deleteData,
  deleteMultiData,
  updateData,
} from '../controller/restController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createData);
router.route('/').get(protect, getData);
router.route('/:id').delete(protect, deleteData).put(protect, updateData);
router.route('/delete').post(protect, deleteMultiData);

export default router;
