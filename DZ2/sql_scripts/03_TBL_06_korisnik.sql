CREATE TABLE korisnik (
	id SERIAL PRIMARY KEY
	, korisnicko_ime VARCHAR(20)
	, lozinka_salt VARCHAR
	, lozinka_hash VARCHAR
);
