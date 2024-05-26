// src/controllers/povijestServisiranjaController.ts
import { Request, Response } from 'express';
import { getAllServisHistories, getServisHistoryById, createServisHistory, updateServisHistory, deleteServisHistory } from '../models/PovijestServisiranja';
import { connect } from 'http2';

export const showServisHistory = async (req: Request, res: Response) => {
  try {
    const history = await getServisHistoryById(Number(req.params.id));
    if (history) {
      res.render('servisi/servis', { servis: history, oglasId: history.oglasId });
    } else {
      res.status(404).send('Servis history not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching servis history');
  }
};

export const createServisHistoryHandler = async (req: Request, res: Response) => {
  try {
    const { datum, serviser, opis, cijena, oglasId, trenutnaKilomentraza } = req.body;
    const history = await createServisHistory({
      datum: new Date(datum),
      serviser,
      opis,
      trenutnaKilomentraza: Number(trenutnaKilomentraza),
      cijena: parseFloat(cijena),
      oglas: {
        connect: {
          id: Number(oglasId),
        },
      },
    } as any);

    res.redirect(`/oglasi/${oglasId}`);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating servis history');
  }
};

export const newServisHistoryFormHandler = async (req: Request, res: Response) => {
  res.render('servisi/servis', { servis: undefined, oglasId: req.params.oglasId });
}

export const updateServisHistoryHandler = async (req: Request, res: Response) => {
  try {
    const { datum, serviser, opis, cijena, trenutnaKilomentraza } = req.body;
    const history = await updateServisHistory(Number(req.params.id), {
      datum: new Date(datum),
      serviser,
      opis,
      cijena: parseFloat(cijena),
      trenutnaKilomentraza: Number(trenutnaKilomentraza),
      oglas: {
          connect: {
            id: Number(req.body.oglasId),
        }
      }
    } as any);
    res.redirect(`/oglasi/${req.body.oglasId}`);
  } catch (error) {
    res.status(500).send('Error updating servis history');
  }
};

export const deleteServisHistoryHandler = async (req: Request, res: Response) => {
  try {
    await deleteServisHistory(Number(req.params.id));
    res.redirect('back');
  } catch (error) {
    res.status(500).send('Error deleting servis history');
  }
};
