import express from 'express';
import { create } from '@controllers/user';
import { runAsync } from '@utils/express';

const router = express.Router();

router.post('/create', runAsync(create));

export default router;
