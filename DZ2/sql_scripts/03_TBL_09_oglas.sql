CREATE TABLE oglas (
	id SERIAL PRIMARY KEY
	, naslov VARCHAR(30)
	, model_id INT
	, kilometraza INT
	, snaga_kw INT
	, godina_proizvodnje INT
	, oblik_karoserije_id INT
	, vrsta_motora_id INT
	, vrsta_mjenjaca_id INT
	, objavio_korisnik_id INT
	, datum_objave DATETIME
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
