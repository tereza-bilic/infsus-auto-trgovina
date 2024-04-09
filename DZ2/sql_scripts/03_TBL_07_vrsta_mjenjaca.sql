CREATE TABLE vrsta_mjenjaca (
  id SERIAL PRIMARY KEY
  , ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO vrsta_mjenjaca (ime) VALUES ('Ručni');
INSERT INTO vrsta_mjenjaca (ime) VALUES ('Automatski');
INSERT INTO vrsta_mjenjaca (ime) VALUES ('Poluautomatski');
INSERT INTO vrsta_mjenjaca (ime) VALUES ('CVT');
INSERT INTO vrsta_mjenjaca (ime) VALUES ('DCT');
INSERT INTO vrsta_mjenjaca (ime) VALUES ('Sekvencijalni');