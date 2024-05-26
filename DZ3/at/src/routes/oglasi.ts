import express from 'express';
import { searchOglasiHandler, showOglas, createOglasHandler, updateOglasHandler, deleteOglasHandler, newOglasFormHandler } from '../controllers/oglasController';
import upload from '../middleware/upload';

const router = express.Router();

router.get('/', searchOglasiHandler);
router.get('/oglas', newOglasFormHandler);
router.get('/:id', showOglas);
router.post('/', upload.single('slikaUrl'), createOglasHandler);
router.put('/:id', upload.single('slikaUrl'), updateOglasHandler);
router.delete('/:id', deleteOglasHandler);

export default router;
