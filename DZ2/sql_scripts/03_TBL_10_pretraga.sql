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
