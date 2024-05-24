import { Request, Response } from 'express';
import { getAllOglasi, getOglasById, createOglas, updateOglas, deleteOglas, OblikKaroserije, VrstaMjenjaca, VrstaMotora } from '../models/Oglas';
import { getAllMarke } from '../models/Marka';

export const listOglasi = async (req: Request, res: Response) => {
  const oglasi = await getAllOglasi();
  res.render('oglasi/list', { oglasi });
};

export const showOglas = async (req: Request, res: Response) => {
  const oglas = await getOglasById(Number(req.params.id));
  if (oglas) {
    res.render('oglasi/show', { oglas });
  } else {
    res.status(404).send('Oglas not found');
  }
};

export const newOglasFormHandler = async (req: Request, res: Response) => {
  const marke = await getAllMarke();

  //load marka model for dropdown
  // send vrsta_motora, vrsta_mjenjaca, oblik_karoserije enums from prisma shema for dropdown
  res.render('oglasi/new', {
    marke,
    karoserije: Object.values(OblikKaroserije),
    mjenjaci: Object.values(VrstaMjenjaca),
    motori: Object.values(VrstaMotora),
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
    snagaKw: Number(req.body.snagaKw),
    objavioKorisnik: {
      create: {
        id: 1,
        ime: 'Anon',
        email: 'anon@mail.com'
      }
    }
  });
  res.redirect(`/oglasi/${oglas.id}`);
};

export const updateOglasHandler = async (req: Request, res: Response) => {
  const oglas = await updateOglas(Number(req.params.id), req.body);
  res.redirect(`/oglasi/${oglas.id}`);
};

export const deleteOglasHandler = async (req: Request, res: Response) => {
  await deleteOglas(Number(req.params.id));
  res.redirect('/oglasi');
};
