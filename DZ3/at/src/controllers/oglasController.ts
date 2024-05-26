import { Request, Response } from 'express';
import { getAllOglasi, getOglasById, createOglas, updateOglas, deleteOglas, OblikKaroserije, VrstaMjenjaca, VrstaMotora, searchOglasiByNaziv } from '../models/Oglas';
import { getAllMarke } from '../models/Marka';
import { getServiceHistoryByOglasId } from '../models/PovijestServisiranja';

export const listOglasi = async (req: Request, res: Response) => {
  const oglasi = await getAllOglasi();
  res.render('oglasi/list', {
    oglasi
  });
};

export const showOglas = async (req: Request, res: Response) => {
  const oglas = await getOglasById(Number(req.params.id));
  const marke = await getAllMarke();
  const povijestServisiranja = await getServiceHistoryByOglasId(Number(req.params.id));

  if (oglas) {
    res.render('oglasi/oglas', {
      oglas,
      marke,
      karoserije: Object.values(OblikKaroserije),
      mjenjaci: Object.values(VrstaMjenjaca),
      motori: Object.values(VrstaMotora),
      povijestServisiranja
    });
  } else {
    res.status(404).send('Oglas not found');
  }
};

export const newOglasFormHandler = async (req: Request, res: Response) => {
  const marke = await getAllMarke();

  res.render('oglasi/oglas', {
    oglas: undefined,
    marke,
    karoserije: Object.values(OblikKaroserije),
    mjenjaci: Object.values(VrstaMjenjaca),
    motori: Object.values(VrstaMotora),
    povijestServisiranja: []
  }
  );
};

export const createOglasHandler = async (req: Request, res: Response) => {
  const {modelId, ...rest} = req.body;
  const oglas = await createOglas({
    ...rest,
    model: {
      connect: {
        id: Number(req.body.modelId)
      }
    },
    datumObjave: new Date(),
    cijena: Number(req.body.cijena),
    godinaProizvodnje: Number(req.body.godinaProizvodnje),
    kilometraza: Number(req.body.kilometraza),
    snagaKw: Number(req.body.snagaKw)
  });
  res.redirect(`/oglasi`);
};

export const updateOglasHandler = async (req: Request, res: Response) => {
  const {modelId, ...rest} = req.body;
  try {
    const oglas = await updateOglas(Number(req.params.id), {
      ...rest,
      model: {
        connect: {
          id: Number(req.body.modelId)
        }
      },
      datumObjave: new Date(),
      cijena: Number(req.body.cijena),
      godinaProizvodnje: Number(req.body.godinaProizvodnje),
      kilometraza: Number(req.body.kilometraza),
      snagaKw: Number(req.body.snagaKw)
    });

    res.redirect(`/oglasi`);
  }
  catch (e) {
    console.log(e);
  }
};

export const deleteOglasHandler = async (req: Request, res: Response) => {
  await deleteOglas(Number(req.params.id));
  res.redirect('/oglasi');
};

export const searchOglasiHandler = async (req: Request, res: Response) => {
  const { search } = req.query;

  // Perform the search only if a search term is provided
  if (typeof search === 'string' && search.trim() !== '') {
    const oglasi = await searchOglasiByNaziv(search);
    return res.render('oglasi/list', { oglasi, search });
  }

  // If no search term, redirect to listOglasi handler or render an empty list
  const oglasi = await getAllOglasi();
  res.render('oglasi/list', {
    oglasi
  });

};
