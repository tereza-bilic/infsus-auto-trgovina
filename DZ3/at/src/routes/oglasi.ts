import express from 'express';
import { searchOglasiHandler, showOglas, createOglasHandler, updateOglasHandler, deleteOglasHandler, newOglasFormHandler } from '../controllers/oglasController';

const router = express.Router();

router.get('/', searchOglasiHandler);
router.get('/oglas', newOglasFormHandler);
router.get('/:id', showOglas);
router.post('/', createOglasHandler);
router.put('/:id', updateOglasHandler);
router.delete('/:id', deleteOglasHandler);

export default router;
