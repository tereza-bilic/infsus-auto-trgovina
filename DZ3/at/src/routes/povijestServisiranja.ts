// src/routes/povijestServisiranjaRoutes.ts
import express from 'express';
import {
  showServisHistory,
  createServisHistoryHandler,
  updateServisHistoryHandler,
  deleteServisHistoryHandler,
  newServisHistoryFormHandler,
} from '../controllers/povijestServisiranjaController';

const router = express.Router();

router.get('/:id', showServisHistory);
router.get('/new/:oglasId', newServisHistoryFormHandler);
router.post('/', createServisHistoryHandler);
router.put('/:id', updateServisHistoryHandler);
router.delete('/:id', deleteServisHistoryHandler);

export default router;
