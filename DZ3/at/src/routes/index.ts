import express from 'express';
import { showIndexHandler } from '../controllers/indexController';

const router = express.Router();

router.get('/', showIndexHandler);

export default router;
