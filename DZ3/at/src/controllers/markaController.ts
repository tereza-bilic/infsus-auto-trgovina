import { Request, Response } from 'express';
import { getAllMarke, getMarkaById, createMarka, updateMarka, deleteMarka } from '../models/Marka';

export const listMarke = async (req: Request, res: Response) => {
  try {
    const marke = await getAllMarke();
    res.render('marke/list', { marke });
  } catch (error) {
    res.status(500).send('Error retrieving marke');
  }
};

export const showMarka = async (req: Request, res: Response) => {
  const markaId = Number(req.params.id);
  try {
    const marka = await getMarkaById(markaId);
    if (marka) {
      res.render('marke/show', { marka });
    } else {
      res.status(404).send('Marka not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving marka');
  }
};

export const createMarkaHandler = async (req: Request, res: Response) => {
  try {
    const newMarka = await createMarka(req.body);
    res.redirect(`/marke`);
  } catch (error) {
    res.status(500).send('Error creating marka');
  }
};

export const updateMarkaHandler = async (req: Request, res: Response) => {
  const markaId = Number(req.params.id);
  try {
    const updatedMarka = await updateMarka(markaId, req.body);
    res.redirect(`/marke/${updatedMarka.id}`);
  } catch (error) {
    res.status(500).send('Error updating marka');
  }
};

export const deleteMarkaHandler = async (req: Request, res: Response) => {
  const markaId = Number(req.params.id);
  try {
    await deleteMarka(markaId);
    res.redirect('/marke');
  } catch (error) {
    res.status(500).send('Error deleting marka');
  }
};
