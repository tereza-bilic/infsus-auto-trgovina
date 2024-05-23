import express from 'express';

const router = express.Router();

// Sample list of cars
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2019 },
  { make: 'Ford', model: 'Mustang', year: 2021 },
];

// GET cars listing
router.get('/', (req, res) => {
  res.render('cars', { title: 'Car List', cars });
});

export default router;
