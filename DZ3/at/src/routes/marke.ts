import express from 'express';
import { listMarke, showMarka, createMarkaHandler, updateMarkaHandler, deleteMarkaHandler } from '../controllers/markaController';

const router = express.Router();

router.get('/', listMarke);
router.get('/:id', showMarka);
router.post('/', createMarkaHandler);
router.put('/:id', updateMarkaHandler);
router.delete('/:id', deleteMarkaHandler);

export default router;
