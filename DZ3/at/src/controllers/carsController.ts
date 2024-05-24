import express from 'express';

const router = express.Router();

// id?: number;
// naslov: string;
// model_id: number;
// kilometraza: number;
// snaga_kw: number;
// godina_proizvodnje: number;
// oblik_karoserije_id: number;
// vrsta_motora_id: number;
// vrsta_mjenjaca_id: number;
// objavio_korisnik_id: number;
// datum_objave: Date;
// cijena: number;

// Sample data na temelju oglas modela

const cars = [
  {
    id: 1,
    naslov: 'Mercedes',
    model_id: 1,
    kilometraza: 100000,
    snaga_kw: 100,
    godina_proizvodnje: 2010,
    oblik_karoserije_id: 1,
    vrsta_motora_id: 1,
    vrsta_mjenjaca_id: 1,
    objavio_korisnik_id: 1,
    datum_objave: new Date(),
    cijena: 10000,
  },
  {
    id: 2,
    naslov: 'Audi',
    model_id: 2,
    kilometraza: 200000,
    snaga_kw: 200,
    godina_proizvodnje: 2015,
    oblik_karoserije_id: 2,
    vrsta_motora_id: 2,
    vrsta_mjenjaca_id: 2,
    objavio_korisnik_id: 2,
    datum_objave: new Date(),
    cijena: 20000,
  },
  {
    id: 3,
    naslov: 'BMW',
    model_id: 3,
    kilometraza: 300000,
    snaga_kw: 300,
    godina_proizvodnje: 2020,
    oblik_karoserije_id: 3,
    vrsta_motora_id: 3,
    vrsta_mjenjaca_id: 3,
    objavio_korisnik_id: 3,
    datum_objave: new Date(),
    cijena: 30000,
  },
];


// GET cars listing
router.get('/', (req, res) => {
  res.render('cars', { title: 'Car List', cars });
});

export default router;
