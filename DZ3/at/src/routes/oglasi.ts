import express from 'express';
import { listOglasi, showOglas, createOglasHandler, updateOglasHandler, deleteOglasHandler, newOglasFormHandler } from '../controllers/oglasController';

const router = express.Router();

router.get('/', listOglasi);
router.get('/oglas', newOglasFormHandler);
router.get('/:id', showOglas);
router.post('/', createOglasHandler);
router.put('/:id', updateOglasHandler);
router.delete('/:id', deleteOglasHandler);

export default router;
