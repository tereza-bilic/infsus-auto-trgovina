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
INSERT INTO oblik_karoserije (opis) VALUES ('Terenski automobil');