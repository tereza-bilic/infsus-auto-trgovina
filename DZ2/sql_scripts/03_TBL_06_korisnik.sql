CREATE TABLE korisnik (
	id SERIAL PRIMARY KEY
	, korisnicko_ime VARCHAR(20) NOT NULL
	, lozinka_salt VARCHAR NOT NULL
	, lozinka_hash VARCHAR NOT NULL
);
