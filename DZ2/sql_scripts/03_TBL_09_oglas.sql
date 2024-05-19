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
