import express from 'express';
import { healthCheck } from '@controllers/index';
import messageRouter from '@routes/message';
import userRouter from '@routes/user';

const router = express.Router();

router.get('/health-check', healthCheck);
router.use('/message', messageRouter);
router.use('/user', userRouter);

export default router;
