CREATE TABLE oglas_favorit (
  id SERIAL PRIMARY KEY
  , oglas_id INT NOT NULL
  , korisnik_id INT NOT NULL
);

ALTER TABLE oglas_favorit ADD CONSTRAINT oglas_favorit_fk_oglas 
FOREIGN KEY (oglas_id) REFERENCES oglas (id);

ALTER TABLE oglas_favorit ADD CONSTRAINT oglas_favorit_fk_korisnik 
FOREIGN KEY (korisnik_id) REFERENCES korisnik (id);