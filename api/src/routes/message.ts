import express from 'express';
import { getAll, save } from '@controllers/message';
import { runAsync } from '@utils/express';

const router = express.Router();

router.get('/all', runAsync(getAll));
router.post('/save', runAsync(save));

export default router;
