CREATE DATABASE auto_trgovina;CREATE TABLE marka (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO marka (id, ime) VALUES (1, 'Audi');
INSERT INTO marka (id, ime) VALUES (2, 'Alfa Romeo');
INSERT INTO marka (id, ime) VALUES (3, 'BMW');
INSERT INTO marka (id, ime) VALUES (4, 'Citroën');
INSERT INTO marka (id, ime) VALUES (5, 'Fiat');
INSERT INTO marka (id, ime) VALUES (6, 'Ford');
INSERT INTO marka (id, ime) VALUES (7, 'Honda');
INSERT INTO marka (id, ime) VALUES (8, 'Hyundai');
INSERT INTO marka (id, ime) VALUES (9, 'Kia');
INSERT INTO marka (id, ime) VALUES (10, 'Mercedes-Benz');
INSERT INTO marka (id, ime) VALUES (11, 'Nissan');
INSERT INTO marka (id, ime) VALUES (12, 'Opel');
INSERT INTO marka (id, ime) VALUES (13, 'Peugeot');
INSERT INTO marka (id, ime) VALUES (14, 'Renault');
INSERT INTO marka (id, ime) VALUES (15, 'Seat');
INSERT INTO marka (id, ime) VALUES (16, 'Škoda');
INSERT INTO marka (id, ime) VALUES (17, 'Toyota');
INSERT INTO marka (id, ime) VALUES (18, 'Volkswagen');
CREATE TABLE tip_vozila (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO tip_vozila (ime) VALUES ('Osobni automobil');
INSERT INTO tip_vozila (ime) VALUES ('Teretni automobil');
INSERT INTO tip_vozila (ime) VALUES ('Autobus');
INSERT INTO tip_vozila (ime) VALUES ('Motocikl');
INSERT INTO tip_vozila (ime) VALUES ('Kamion');
INSERT INTO tip_vozila (ime) VALUES ('Traktor');
INSERT INTO tip_vozila (ime) VALUES ('Bicikl');
INSERT INTO tip_vozila (ime) VALUES ('Moped');
CREATE TABLE model (
	id SERIAL PRIMARY KEY
	, ime VARCHAR(30) NOT NULL
	, tip_vozila_id INT NOT NULL
	, marka_id INT NOT NULL
);

ALTER TABLE model ADD CONSTRAINT model_fk_tip_vozila 
FOREIGN KEY (tip_vozila_id) REFERENCES tip_vozila (id);

ALTER TABLE model ADD CONSTRAINT model_fk_marka
FOREIGN KEY (marka_id) REFERENCES marka (id);

-- PODACI
-- Audi
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A1', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A3', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A4', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A5', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A6', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A7', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A8', 1, 1); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('R8', 1, 1); -- Osobni automobil

-- Alfa Romeo
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('33', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('146', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('147', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('155', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('156', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('159', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('166', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Brera', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Giulia', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Giulietta', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('GT', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('GTV', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Spyder', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Stelvio', 1, 2); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Tonale', 1, 2); -- Osobni automobil

-- BMW
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 1', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 2', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 5', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 6', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 7', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Serija 8', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X1', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X2', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X5', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X6', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('X7', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z3', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z4', 1, 3); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Z8', 1, 3); -- Osobni automobil

-- Citroen
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C3', 1, 4); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C4', 1, 4); -- Osobni automobil

-- Fiat
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('500', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Brava', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Bravo', 1, 5); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Punto', 1, 5); -- Osobni automobil

-- Ford
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Fiesta', 1, 6); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Focus', 1, 6); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Mondeo', 1, 6); -- Osobni automobil

-- Honda
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Civic', 1, 7); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Accord', 1, 7); -- Osobni automobil

-- Hyundai
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('i30', 1, 8); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('i40', 1, 8); -- Osobni automobil

-- Kia
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Ceed', 1, 9); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Sportage', 1, 9); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Rio', 1, 9); -- Osobni automobil

-- Mercedes-Benz
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('A klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('B klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('C klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('E klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('S klasa', 1, 10); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('G klasa', 1, 10); -- Osobni automobil

-- Nissan
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Micra', 1, 11); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Qashqai', 1, 11); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Juke', 1, 11); -- Osobni automobil

-- Opel
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Astra', 1, 12); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Corsa', 1, 12); -- Osobni automobil

-- Peugeot
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('206', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('207', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('208', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('307', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('308', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('406', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('407', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('508', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('2008', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('3008', 1, 13); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('5008', 1, 13); -- Osobni automobil

-- Renault
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Clio', 1, 14); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Megane', 1, 14); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Talisman', 1, 14); -- Osobni automobil

-- Seat
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Cordoba', 1, 15); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Ibiza', 1, 15); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Leon', 1, 15); -- Osobni automobil

-- Skoda
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Fabia', 1, 16); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Octavia', 1, 16); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Superb', 1, 16); -- Osobni automobil

-- Toyota
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Yaris', 1, 17); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Corolla', 1, 17); -- Osobni automobil

-- Volkswagen
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Golf', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Passat', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Tiguan', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Touareg', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Arteon', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('T-Roc', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Up!', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('Polo', 1, 18); -- Osobni automobil
INSERT INTO model (ime, tip_vozila_id, marka_id) VALUES ('T-Cross', 1, 18); -- Osobni automobil
CREATE TABLE oprema (
	id SERIAL PRIMARY KEY
	, opis VARCHAR(50) NOT NULL
);

-- PODACI
INSERT INTO oprema (opis) VALUES ('Klima uređaj');
INSERT INTO oprema (opis) VALUES ('Tempomat');
INSERT INTO oprema (opis) VALUES ('Servo volan');
INSERT INTO oprema (opis) VALUES ('Električni podizači stakala');
INSERT INTO oprema (opis) VALUES ('Centralno zaključavanje');
INSERT INTO oprema (opis) VALUES ('Radio s CD/MP3 playerom');
INSERT INTO oprema (opis) VALUES ('Zvučnici');
INSERT INTO oprema (opis) VALUES ('Aluminijske felge');

-- Dodatna oprema
INSERT INTO oprema (opis) VALUES ('Grijana sjedala');
INSERT INTO oprema (opis) VALUES ('Kožna unutrašnjost');
INSERT INTO oprema (opis) VALUES ('Panoramski krov');
INSERT INTO oprema (opis) VALUES ('Navigacijski sustav');
INSERT INTO oprema (opis) VALUES ('Bluetooth veza');
INSERT INTO oprema (opis) VALUES ('USB priključak');

-- Sigurnosna oprema
INSERT INTO oprema (opis) VALUES ('Airbag (vozač, suputnik, bočni)');
INSERT INTO oprema (opis) VALUES ('ABS sustav');
INSERT INTO oprema (opis) VALUES ('ESP sustav');
INSERT INTO oprema (opis) VALUES ('Traction control');
INSERT INTO oprema (opis) VALUES ('Isofix pronađači za dječja sjedala');
INSERT INTO oprema (opis) VALUES ('Alarm');
INSERT INTO oprema (opis) VALUES ('Imobilizator');

CREATE TABLE oblik_karoserije (
	id SERIAL PRIMARY KEY
	, opis VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO oblik_karoserije (opis) VALUES ('Limuzina');
INSERT INTO oblik_karoserije (opis) VALUES ('Karavan');
INSERT INTO oblik_karoserije (opis) VALUES ('Hatchback');
INSERT INTO oblik_karoserije (opis) VALUES ('Crossover');
INSERT INTO oblik_karoserije (opis) VALUES ('SUV');
INSERT INTO oblik_karoserije (opis) VALUES ('Coupé');
INSERT INTO oblik_karoserije (opis) VALUES ('Kabriolet');
INSERT INTO oblik_karoserije (opis) VALUES ('Monovolumen');
INSERT INTO oblik_karoserije (opis) VALUES ('Pick-up');
INSERT INTO oblik_karoserije (opis) VALUES ('Terenski automobil');CREATE TABLE korisnik (
	id SERIAL PRIMARY KEY
	, korisnicko_ime VARCHAR(20) NOT NULL
	, lozinka_salt VARCHAR NOT NULL
	, lozinka_hash VARCHAR NOT NULL
);
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
INSERT INTO vrsta_mjenjaca (ime) VALUES ('Sekvencijalni');CREATE TABLE vrsta_motora (
  id SERIAL PRIMARY KEY
  , ime VARCHAR(30) NOT NULL
);

-- PODACI
INSERT INTO vrsta_motora (ime) VALUES ('Benzinski');
INSERT INTO vrsta_motora (ime) VALUES ('Dizelski');
INSERT INTO vrsta_motora (ime) VALUES ('Hibridni');
INSERT INTO vrsta_motora (ime) VALUES ('Električni');
INSERT INTO vrsta_motora (ime) VALUES ('Plin (CNG/LPG)');
INSERT INTO vrsta_motora (ime) VALUES ('Vodik');
INSERT INTO vrsta_motora (ime) VALUES ('Benzinski Wankel');
CREATE TABLE oglas (
	id SERIAL PRIMARY KEY
	, naslov VARCHAR(30) NOT NULL
	, model_id INT NOT NULL
	, kilometraza INT NOT NULL
	, snaga_kw INT NOT NULL
	, godina_proizvodnje INT NOT NULL
	, oblik_karoserije_id INT NOT NULL
	, vrsta_motora_id INT NOT NULL
	, vrsta_mjenjaca_id INT NOT NULL
	, objavio_korisnik_id INT NOT NULL
	, datum_objave TIMESTAMP NOT NULL
	, cijena INT NOT NULL
);

ALTER TABLE oglas ADD CONSTRAINT oglas_fk_model 
FOREIGN KEY (model_id) REFERENCES model (id);

ALTER TABLE oglas ADD CONSTRAINT oglas_fk_oblik_karoserije 
FOREIGN KEY (oblik_karoserije_id) REFERENCES oblik_karoserije (id);

ALTER TABLE oglas ADD CONSTRAINT oglas_fk_vrsta_motora 
FOREIGN KEY (vrsta_motora_id) REFERENCES vrsta_motora (id);

ALTER TABLE oglas ADD CONSTRAINT oglas_fk_vrsta_mjenjaca 
FOREIGN KEY (vrsta_mjenjaca_id) REFERENCES vrsta_mjenjaca (id);

ALTER TABLE oglas ADD CONSTRAINT oglas_fk_objavio_korisnik
FOREIGN KEY (objavio_korisnik_id) REFERENCES korisnik (id);
CREATE TABLE pretraga (
	id SERIAL PRIMARY KEY
	, korisnik_id INT NOT NULL
	, model_id INT
	, oblik_karoserije_id INT
	, kilometraza_od INT
	, kilometraza_do INT
	, godina_proizvodnje_od INT
	, godina_proizvodnje_do INT
	, snaga_kw_od INT
	, snaga_kw_do INT
	, vrsta_motora_id INT
	, vrsta_mjenjaca_id INT
	, cijena_od INT
	, cijena_do INT
);

ALTER TABLE pretraga ADD CONSTRAINT pretraga_fk_model 
FOREIGN KEY (model_id) REFERENCES model (id);

ALTER TABLE pretraga ADD CONSTRAINT pretraga_fk_oblik_karoserije 
FOREIGN KEY (oblik_karoserije_id) REFERENCES oblik_karoserije (id);

ALTER TABLE pretraga ADD CONSTRAINT pretraga_fk_korisnik
FOREIGN KEY (korisnik_id) REFERENCES korisnik (id);

ALTER TABLE pretraga ADD CONSTRAINT pretraga_fk_vrsta_motora
FOREIGN KEY (vrsta_motora_id) REFERENCES vrsta_motora (id);

ALTER TABLE pretraga ADD CONSTRAINT pretraga_fk_vrsta_mjenjaca
FOREIGN KEY (vrsta_mjenjaca_id) REFERENCES vrsta_mjenjaca (id);
CREATE TABLE oglas_favorit (
  id SERIAL PRIMARY KEY
  , oglas_id INT NOT NULL
  , korisnik_id INT NOT NULL
);

ALTER TABLE oglas_favorit ADD CONSTRAINT oglas_favorit_fk_oglas 
FOREIGN KEY (oglas_id) REFERENCES oglas (id);

ALTER TABLE oglas_favorit ADD CONSTRAINT oglas_favorit_fk_korisnik 
FOREIGN KEY (korisnik_id) REFERENCES korisnik (id);CREATE TABLE oglas_oprema (
  id SERIAL PRIMARY KEY
  , oglas_id INT NOT NULL
  , oprema_id INT NOT NULL
);

ALTER TABLE oglas_oprema ADD CONSTRAINT oglas_oprema_fk_oglas 
FOREIGN KEY (oglas_id) REFERENCES oglas (id);

ALTER TABLE oglas_oprema ADD CONSTRAINT oglas_oprema_fk_oprema 
FOREIGN KEY (oprema_id) REFERENCES oprema (id);