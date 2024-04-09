CREATE TABLE oglas_favorit (
  id SERIAL PRIMARY KEY
  , oglas_id INT NOT NULL
  , korisnik_id INT NOT NULL
);