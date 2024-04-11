CREATE TABLE oglas_oprema (
  id SERIAL PRIMARY KEY
  , oglas_id INT NOT NULL
  , oprema_id INT NOT NULL
);

ALTER TABLE oglas_oprema ADD CONSTRAINT oglas_oprema_fk_oglas 
FOREIGN KEY (oglas_id) REFERENCES oglas (id);

ALTER TABLE oglas_oprema ADD CONSTRAINT oglas_oprema_fk_oprema 
FOREIGN KEY (oprema_id) REFERENCES oprema (id);